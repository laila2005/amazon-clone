import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getProductDetails } from "../redux/slices/productSlice";
import { getProducts } from "../utils/api";
import { getPlaceholderImage } from "../api/productApi";
import { Rating } from "react-simple-star-rating";
import paymentOnly from "../assets/images/paymentonly.png";
import returnPolicy from "../assets/images/return.png";
import secureTrans from "../assets/images/secure.png";
import locationIcon from "../assets/images/location icon.png";
import { useCart } from "../context/CartContext";
import CartNotification from "../components/CartNotification";
import "./ProductDetailPage.custom.css";

const today = new Date();
const startDate = new Date();
const endDate = new Date();
startDate.setDate(today.getDate() + 2);
endDate.setDate(today.getDate() + 6);

const options = { day: "numeric", month: "short" };
const startFormatted = startDate.toLocaleDateString("en-US", options);
const endFormatted = endDate.toLocaleDateString("en-US", options);

function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [notification, setNotification] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(false);

  const dispatch = useDispatch();
  const { details, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductDetails(id));
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (details?.category) {
        try {
          setRelatedLoading(true);
          const allProducts = await getProducts();
          let related = allProducts
            .filter((p) => p.category === details.category && p.id !== details.id)
            .slice(0, 5);

          if (related.length < 5) {
            const others = allProducts
              .filter((p) => p.id !== details.id && !related.some((r) => r.id === p.id))
              .slice(0, 5 - related.length);
            related = [...related, ...others];
          }

          setRelatedProducts(related);
        } catch (err) {
          console.error("Error fetching related products:", err);
        } finally {
          setRelatedLoading(false);
        }
      }
    };
    fetchRelatedProducts();
  }, [details]);

  const handleAddToCart = () => {
    if (details) {
      const cartProduct = {
        id: details.id,
        title: details.title,
        price: details.price,
        image: details.image,
        category: details.category,
        quantity,
      };
      addToCart(cartProduct, quantity);
      setNotification(`${details.title} added to your cart!`);
    }
  };

  const handleImageError = (e) => {
    e.target.src = `https://dummyimage.com/300x300/e0e0e0/333333&text=${
      encodeURIComponent(details?.title?.substring(0, 20) || "Product")
    }`;
  };

  const currentImage =
    details?.image ||
    `https://dummyimage.com/300x300/e0e0e0/333333&text=${encodeURIComponent(
      details?.title?.substring(0, 20) || "Product"
    )}`;

  return (
    <div className="amazon-product-detail">
      <CartNotification message={notification} />
      {loading && (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center min-h-[50vh] px-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md text-center">
            <p className="font-bold">Error loading product</p>
            <p>{error}</p>
            <button
              className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
              onClick={() => dispatch(getProductDetails(id))}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
      {!loading && !error && details?.id && (
        <div className="product-container">
          {/* Left - Image */}
          <div className="product-image-section">
            <img
              src={currentImage}
              alt={details.title}
              className="product-image"
              onError={handleImageError}
            />
          </div>
          {/* Middle - Details */}
          <div className="product-details-section">
            <p className="product-brand">Brand: {details.brand}</p>
            <h1 className="product-title">{details.title}</h1>
            <div className="product-rating">
              <span className="text-yellow-600 font-medium">
                {details.rating?.rate || 0}
              </span>
              <Rating
                readonly
                initialValue={details.rating?.rate || 0}
                allowFraction
                size={20}
                fillColor="#F59E0B"
              />
              <p className="text-blue-500 hover:underline cursor-pointer text-sm">
                {details?.reviews?.length || 0} ratings
              </p>
            </div>
            <div className="product-price">${details.price}</div>
            <p className="text-gray-600 text-sm mb-3">Inclusive of VAT</p>
            {details.discountPercentage > 0 && (
              <p className="text-green-600 text-sm mb-3">
                Save {Math.round(details.discountPercentage)}% with this offer
              </p>
            )}
            <h3 className="text-lg font-bold mb-2">About this item</h3>
            <ul className="product-description list-disc list-inside text-gray-700 text-sm space-y-1">
              {details.description?.split(". ").map((sentence, i) => (
                <li key={i}>{sentence.trim()}</li>
              ))}
            </ul>
          </div>
          {/* Right - Buy Box */}
          <div className="product-buy-box">
            <div className="product-price">${details.price}</div>
            <p className="text-sm mb-2">
              Delivery: <span className="text-green-700 font-semibold">{startFormatted} - {endFormatted}</span>
            </p>
            <p className="text-green-600 font-medium mb-2">
              {details.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <div className="flex items-center gap-2 mb-3">
              <label className="text-sm font-medium">Qty:</label>
              <select
                className="border rounded px-2 py-1 text-sm"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {[...Array(Math.min(10, details.stock || 1))].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <button
              className={`add-cart-btn${details.stock > 0 ? '' : ' disabled'}`}
              disabled={details.stock <= 0}
              onClick={details.stock > 0 ? handleAddToCart : undefined}
            >
              Add to Cart
            </button>
            <button
              className={`buy-btn${details.stock > 0 ? '' : ' disabled'}`}
              disabled={details.stock <= 0}
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export const SingleProduct = ProductDetailPage;

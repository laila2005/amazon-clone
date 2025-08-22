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
    <div className="bg-gray-50">
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
        <>
          {/* Product Section */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4 py-8 bg-white shadow-sm rounded-lg">
            {/* Left - Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                <img
                  src={currentImage}
                  alt={details.title}
                  className="object-contain max-h-[400px] w-full"
                  onError={handleImageError}
                />
              </div>
            </div>

            {/* Middle - Details */}
            <div className="flex-1 flex flex-col">
              <p className="text-blue-600 text-sm hover:underline cursor-pointer mb-1">
                Brand: {details.brand}
              </p>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                {details.title}
              </h1>

              <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mb-3">
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

              <div className="text-xl text-red-600 font-bold mb-1">${details.price}</div>
              <p className="text-gray-600 text-sm mb-3">Inclusive of VAT</p>

              {details.discountPercentage > 0 && (
                <p className="text-green-600 text-sm mb-3">
                  Save {Math.round(details.discountPercentage)}% with this offer
                </p>
              )}

              <h3 className="text-lg font-bold mb-2">About this item</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {details.description?.split(". ").map((sentence, i) => (
                  <li key={i}>{sentence.trim()}</li>
                ))}
              </ul>
            </div>

            {/* Right - Buy Box */}
            <div className="w-full md:w-72 border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
              <div className="text-2xl text-red-600 font-bold mb-1">${details.price}</div>
              <p className="text-sm mb-2">
                Delivery:{" "}
                <span className="text-green-700 font-semibold">
                  {startFormatted} - {endFormatted}
                </span>
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
                className={`w-full py-2 mb-2 rounded-full text-sm font-medium shadow 
                  ${
                    details.stock > 0
                      ? "bg-yellow-400 hover:bg-yellow-500 border border-yellow-500"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                disabled={details.stock <= 0}
                onClick={details.stock > 0 ? handleAddToCart : undefined}
              >
                Add to Cart
              </button>

              <button
                className={`w-full py-2 rounded-full text-sm font-medium shadow 
                  ${
                    details.stock > 0
                      ? "bg-orange-500 hover:bg-orange-600 text-white border border-orange-600"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                disabled={details.stock <= 0}
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Related Products */}
          <div className="max-w-7xl mx-auto mt-10 px-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Customers also viewed
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {relatedLoading
                ? [...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="border border-gray-200 rounded p-4 animate-pulse"
                    >
                      <div className="h-32 bg-gray-200 mb-2"></div>
                      <div className="h-4 bg-gray-200 mb-2 w-3/4"></div>
                      <div className="h-3 bg-gray-200 w-1/4"></div>
                    </div>
                  ))
                : relatedProducts.map((product) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      style={{
                        background: "rgba(255, 255, 255, 1)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        borderRadius: "6px",
                        padding: "16px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        minHeight: "260px",
                        textDecoration: "none"
                      }}
                    >
                      <div
                        style={{
                          height: "140px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "12px",
                          padding: "8px",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain"
                          }}
                          onError={(e) => {
                            e.target.src = getPlaceholderImage(
                              product.title,
                              150,
                              150
                            );
                          }}
                        />
                      </div>
                      <h3
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          marginBottom: "8px",
                          color: "#222",
                          textAlign: "left",
                          lineHeight: "1.3",
                          height: "2.6em",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical"
                        }}
                      >
                        {product.title}
                      </h3>
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              style={{
                                width: "14px",
                                height: "14px",
                                color: i < Math.floor(product.rating?.rate || 0) ? "#FFA41C" : "#E6E6E6"
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span style={{ fontSize: "0.75rem", color: "#007185", marginLeft: "4px" }}>
                          ({product.rating?.count || 0})
                        </span>
                      </div>
                      <div style={{ marginTop: "auto" }}>
                        <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "#111" }}>
                          ${product.price.toFixed(2)}
                        </span>
                        <p style={{ fontSize: "0.75rem", color: "#007600", marginTop: "4px" }}>
                          Free shipping
                        </p>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export const SingleProduct = ProductDetailPage;
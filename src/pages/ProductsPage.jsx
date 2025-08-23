import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts, getCategories } from "../utils/api";
import { getPlaceholderImage } from "../api/productApi";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import CartNotification from "../components/CartNotification";

const ProductsPage = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories()
        ]);
        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Oops!</h2>
          <p>{error}</p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Show notification when items are added to cart */}
      <CartNotification message={notification} />
      
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Browse Products</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === "all"
                ? "bg-yellow-400 text-black font-medium"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm capitalize ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black font-medium"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid - Styled similarly to Cards.jsx */}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          alignItems: "stretch",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#fff",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              borderRadius: "6px",
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              minHeight: "420px",
            }}
          >
            {/* Title */}
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "16px",
                color: "#222",
                textAlign: "left",
                width: "100%",
                lineHeight: "1.3",
                height: "2.8em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical"
              }}
            >
              {product.title}
            </h3>
            
            {/* Product Image */}
            <Link to={`/product/${product.id}`} style={{ display: "block", flexGrow: 1 }}>
              <div
                style={{
                  height: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  padding: "10px",
                }}
              >
                <img
                  src={product.image || getPlaceholderImage(product.title, 300, 300)}
                  alt={product.title}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain"
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getPlaceholderImage(product.title, 300, 300);
                  }}
                />
              </div>
            </Link>
            
            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    style={{
                      width: "16px",
                      height: "16px",
                      color: i < Math.floor(product.rating?.rate || product.rating || 0) ? "#FFA41C" : "#E6E6E6"
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: "0.85rem", color: "#007185", marginLeft: "5px" }}>
                ({product.rating?.count || 0})
              </span>
            </div>
            
            {/* Price */}
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111" }}>
                ${product.price.toFixed(2)}
              </span>
              <p style={{ fontSize: "0.85rem", color: "#007600", marginTop: "4px" }}>
                Free shipping
              </p>
            </div>
            
            {/* Category */}
            <p style={{ 
              fontSize: "0.85rem", 
              color: "#555", 
              marginBottom: "16px", 
              textTransform: "capitalize",
              backgroundColor: "#f5f5f5",
              padding: "4px 8px",
              borderRadius: "4px",
              display: "inline-block"
            }}>
              {product.category}
            </p>
            
            {/* Button */}
            <button
              onClick={() => {
                addToCart(product);
                // Show notification instead of alert
                setNotification(`${product.title.substring(0, 20)}... added to your cart!`);
              }}
              style={{
                width: "100%",
                backgroundColor: "#FFD814",
                border: "none",
                borderRadius: "20px",
                padding: "8px 0",
                fontSize: "0.95rem",
                fontWeight: "500",
                cursor: "pointer",
                marginTop: "auto"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#F7CA00"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#FFD814"}
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-800 mb-2">No products found</h3>
          <p className="text-gray-600">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;

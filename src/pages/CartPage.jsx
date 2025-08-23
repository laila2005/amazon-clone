import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useCart } from "../context/CartContext";
import "../styles/CartPage.custom.css";

// Simplified icon components
const ShoppingCart = (props) => (
  <div className="w-[50px] h-[50px]">  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 ${props.className || ""}`}
    viewBox="0 0 24 24"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg></div>
  
);

const ArrowLeft = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-3 h-3 ${props.className || ""}`}
    viewBox="0 0 24 24"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

export default function Cart() {
  const { cart: cartItems = [], updateQuantity, removeFromCart } = useCart() || {};
  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];

  const subtotal = safeCartItems.reduce((sum, item) => {
    const price = typeof item.price === "number" ? item.price : 0;
    const quantity = typeof item.quantity === "number" ? item.quantity : 0;
    return sum + price * quantity;
  }, 0);
  
  // Calculate shipping (free if subtotal > 25, otherwise $5.99)
  const shipping = subtotal > 25 ? 0 : 5.99;
  
  // Calculate estimated tax (approximately 10% of subtotal)
  const tax = subtotal * 0.1;
  
  // Calculate order total
  const total = subtotal + shipping + tax;

  if (safeCartItems.length === 0) {
    return (
      <div className="amazon-cart-page">
        <div className="cart-container">
          <div className="bg-white rounded-md border border-gray-200 p-8 max-w-md mx-auto text-center">
            <div className="bg-gradient-to-b from-gray-50 to-white h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6 border">
              <ShoppingCart className="h-12 w-12 text-amber-500" />
            </div>
            <h2 className="text-xl font-medium mb-3">Your Amazon Cart is empty</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Your shopping cart lives to serve. Give it purpose — fill it with groceries, clothing,
              household supplies, electronics, and more.
            </p>
            <div className="mb-6">
              <Link to="/products">
                <Button className="bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black font-normal text-sm py-1 px-6 rounded">
                  Continue Shopping
                </Button>
              </Link>
            </div>
            <div className="mt-6 text-xs text-gray-500 border-t border-gray-200 pt-4 max-w-xs mx-auto">
              The price and availability of items at Amazon.com are subject to change. The shopping
              cart is a temporary place to store a list of your items and reflects each item's most
              recent price.
            </div>
          </div>
          <div className="mt-8 max-w-6xl mx-auto">
            <h3 className="text-lg font-medium mb-3">Recommended based on your browsing history</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white p-3 border border-gray-200 rounded-sm">
                  <div className="w-full h-24 bg-gray-100 mb-2 flex items-center justify-center">
                    <span className="text-xs text-gray-400">Product Image</span>
                  </div>
                  <div className="text-xs line-clamp-2 text-blue-600 hover:text-orange-500 cursor-pointer">
                    Product Name That Might Be Interesting For You
                  </div>
                  <div className="text-xs font-semibold mt-1">$19.99</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="amazon-cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <ShoppingCart className="mr-2 text-amber-500" />
          <h1 className="cart-title">Shopping Cart</h1>
          <div className="ml-4 hidden sm:block">
            <span className="text-xs text-blue-600 hover:text-orange-500 hover:underline cursor-pointer">
              Saved for later ({Math.floor(Math.random() * 5)})
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Cart Items */}
          <div className="cart-items lg:col-span-3">
            {safeCartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <Link to={`/product/${item.id}`} className="cart-item-image">
                  <img
                    src={item.image || ""}
                    alt={item.title || "Product"}
                    className="cart-item-image "
                    onError={(e) =>
                      (e.target.src = `https://dummyimage.com/80x80/e0e0e0/333333&text=${encodeURIComponent(
                        item.title?.substring(0, 15) || "Product"
                      )}`)
                    }
                  />
                </Link>
                <div className="cart-item-details">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="cart-item-title">
                      {item.title || "Untitled Product"}
                    </h3>
                  </Link>
                  <div className="flex items-center mt-1">
                    <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                    <p className="text-[11px] text-green-600">In Stock</p>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-1">
                    Sold by <span className="text-blue-600 hover:text-orange-500 hover:underline cursor-pointer">Amazon.com</span>
                  </p>
                  <div className="cart-item-actions">
                    <button onClick={() => removeFromCart(item.id)}>Delete</button>
                    <button>Save for later</button>
                  </div>
                  <div className="flex items-center mt-2">
                    <label htmlFor={`qty-${item.id}`} className="mr-2 text-[11px]">Qty:</label>
                    <select
                      id={`qty-${item.id}`}
                      className="text-[11px] border border-gray-300 rounded px-2 py-0.5 bg-gray-50/80 cursor-pointer appearance-none pr-5"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-800 sm:text-right w-full sm:w-20 mt-2 sm:mt-0">
                  ${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}
                </div>
              </div>
            ))}
          </div>
          {/* Order Summary */}
          <div className="cart-summary lg:col-span-1">
            <div className="cart-summary-title">Order Summary</div>
            <div className="cart-summary-row">
              <span>Items ({safeCartItems.reduce((sum, item) => sum + (item.quantity || 0), 0)}):</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping & handling:</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="cart-summary-row">
              <span>Estimated tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Order total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="cart-checkout-btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

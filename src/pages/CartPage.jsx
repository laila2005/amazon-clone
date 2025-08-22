import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useCart } from "../context/CartContext";

// Simplified icon components
const ShoppingCart = (props) => (
  <svg
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
  </svg>
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
      <div className="flex flex-col min-h-[70vh] px-4 max-w-7xl mx-auto">
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
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-4 px-2 md:px-6">
      {/* Recommendations banner */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100 rounded-sm p-2 mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="text-[12px] font-medium">Personalized recommendations for your cart are ready!</span>
        </div>
        <button className="text-[11px] text-blue-600 hover:text-orange-500 hover:underline">View Now</button>
      </div>
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 pb-2 border-b border-gray-200">
        <div className="flex items-center">
          <ShoppingCart className="mr-2 text-amber-500" />
          <h1 className="text-xl sm:text-2xl font-medium text-gray-900">Shopping Cart</h1>
          <div className="ml-4 hidden sm:block">
            <span className="text-xs text-blue-600 hover:text-orange-500 hover:underline cursor-pointer">
              Saved for later ({Math.floor(Math.random() * 5)})
            </span>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 flex items-center">
          <div className="hidden sm:flex mr-4 items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-1 text-blue-600"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="text-[11px] text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">Sign in to your account</span>
          </div>
          <Link
            to="/products"
            className="text-[11px] text-blue-600 hover:text-orange-500 hover:underline flex items-center"
          >
            <ArrowLeft className="mr-1 mt-[1px]" /> Continue shopping
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Cart Items */}
        <div className="lg:col-span-3 bg-white rounded-sm border border-gray-200 shadow-sm">
          <div className="py-1.5 px-3 border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white text-[10px] uppercase text-gray-600 font-medium hidden sm:flex">
            <div className="w-6"></div>
            <div className="w-16"></div>
            <div className="flex-1 pl-3">Product details</div>
            <div className="w-20 text-right">Price</div>
          </div>
          <div className="px-3 py-2 bg-blue-50/60 border-b border-blue-100 text-[11px] text-blue-900 flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-medium mr-1">FREE SHIPPING</span>
              for eligible orders over $25
            </div>
            <button className="text-blue-600 hover:text-blue-800 hover:underline">Details</button>
          </div>
          {safeCartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start border-b border-gray-200 p-3 hover:bg-gray-50/50 transition"
            >
              {/* Checkbox */}
              <div className="hidden sm:block pt-3 w-6">
                <input type="checkbox" className="rounded-sm border-gray-300 w-3 h-3" defaultChecked />
              </div>

              {/* Image */}
              <Link
                to={`/product/${item.id}`}
                className="w-16 h-16 flex-shrink-0 mx-auto sm:mx-0 mb-2 sm:mb-0"
              >
                <img
                  src={item.image || ""}
                  alt={item.title || "Product"}
                  className="w-16 h-16 object-contain border rounded-sm bg-white"
                  onError={(e) =>
                    (e.target.src = `https://dummyimage.com/80x80/e0e0e0/333333&text=${encodeURIComponent(
                      item.title?.substring(0, 15) || "Product"
                    )}`)
                  }
                />
              </Link>

              {/* Details */}
              <div className="flex-1 px-3">
                <Link to={`/product/${item.id}`}>
                  <h3 className="text-sm font-medium text-gray-800 hover:text-orange-500 line-clamp-2">
                    {item.title || "Untitled Product"}
                  </h3>
                </Link>
                <div className="flex items-center mt-1">
                  <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                  <p className="text-[11px] text-green-600">In Stock</p>
                </div>
                <p className="text-[11px] text-gray-500 mb-1">
                  Sold by{" "}
                  <span className="text-blue-600 hover:text-orange-500 hover:underline cursor-pointer">
                    Amazon.com
                  </span>
                </p>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-1.5">
                  <div className="flex items-center">
                    <input type="checkbox" className="rounded-sm border-gray-300 mr-1.5 h-3 w-3" />
                    <span className="text-[11px]">This is a gift</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="text-[11px] text-blue-600 hover:text-orange-500 hover:underline">Delete</button>
                    <button className="text-[11px] text-blue-600 hover:text-orange-500 hover:underline">Save for later</button>
                    <button className="text-[11px] text-blue-600 hover:text-orange-500 hover:underline">Compare with similar items</button>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Eligible for{" "}
                  <span className="text-blue-600 hover:underline cursor-pointer">FREE Shipping</span>
                </p>
                
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {/* Gift option checkbox */}
                  <div className="flex items-center mr-2">
                    <input type="checkbox" className="mr-1 rounded-sm border-gray-300 h-3 w-3" />
                    <span className="text-[10px]">Gift</span>
                  </div>
                  
                  {/* Quantity Selector */}
                  <div className="relative">
                    <select
                      className="text-[11px] border border-gray-300 rounded px-2 py-0.5 bg-gray-50/80 cursor-pointer appearance-none pr-5"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          Qty: {i + 1}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Item Actions */}
                  <div className="flex flex-wrap items-center gap-1 text-[11px] text-blue-600">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="hover:text-orange-500 hover:underline"
                    >
                      Delete
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="hover:text-orange-500 hover:underline">
                      Save for later
                    </button>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="text-sm font-semibold text-gray-800 sm:text-right w-full sm:w-20 mt-2 sm:mt-0">
                ${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}
              </div>
            </div>
          ))}

          <div className="text-xs text-right px-4 py-3 text-gray-700 border-t bg-gray-50/60">
            Subtotal (
            {safeCartItems.reduce((sum, item) => sum + (item.quantity || 0), 0)} items):{" "}
            <span className="font-semibold text-sm">${subtotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-sm p-4 shadow-sm sticky top-24">
            <div className="flex items-start mb-3">
              <div className="bg-green-50 text-green-600 text-[10px] p-0.5 rounded-sm mr-1.5 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="text-[11px]">
                Your order qualifies for FREE Shipping. <span className="text-blue-600 hover:underline cursor-pointer">See details</span>
              </div>
            </div>
            
            <div className="text-base mb-2.5">
              Subtotal ({safeCartItems.length}{" "}
              {safeCartItems.length === 1 ? "item" : "items"}):{" "}
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="mb-3 flex items-center">
              <input type="checkbox" className="rounded-sm border-gray-300 mr-2 h-3 w-3" defaultChecked />
              <span className="text-[11px]">This order contains a gift</span>
            </div>
            
            <Button className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-normal text-xs py-1.5 px-4 rounded">
              Proceed to checkout
            </Button>
            
            <div className="text-[11px] text-gray-700 border-t pt-3 mt-3">
              <div className="flex justify-between mb-1">
                <span>Items ({safeCartItems.reduce((sum, item) => sum + (item.quantity || 0), 0)}):</span> <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Shipping & handling:</span>{" "}
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Total before tax:</span> <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Estimated tax:</span> <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2 mt-2 text-red-700">
                <span>Order total:</span> <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
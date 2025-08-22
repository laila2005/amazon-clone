import { Link } from "react-router-dom";
// Custom icons instead of lucide-react
import { Button } from "@/components/ui/button";
import SlideUp from "@/components/animations/SlideUp";

/**
 * ProductCard Component - Displays product information in a card format
 * Features: Hover animations, rating display, and action buttons
 */
const ProductCard = ({ product }) => {
  const { id, title, price, image, rating } = product;

  return (
    <SlideUp distance={16} duration={0.2} className="group">
      <div className="amazon-card overflow-hidden h-full flex flex-col">
        {/* Image Container */}
        <div className=" aspect-square overflow-hidden">
          <Link to={`/product/${id}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          {/* Quick Action Buttons */}
          <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0 rounded-full bg-white/90 hover:bg-white shadow-md"
            >
              {/* Custom Heart icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0 rounded-full bg-white/90 hover:bg-white shadow-md"
            >
              {/* Custom ShoppingCart icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </Button>
          </div>
        </div>
        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title */}
          <Link to={`/product/${id}`} className="flex-1">
            <h3 className="font-medium text-foreground text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill={index < Math.floor(rating.rate) ? "currentColor" : "none"}
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`w-3 h-3 ${
                    index < Math.floor(rating.rate)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted ml-1">
              ({rating.count})
            </span>
          </div>
          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-foreground">
              ${price.toFixed(2)}
            </span>
          </div>
          {/* Add to Cart Button */}
          <Button 
            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </SlideUp>
  );
};

export default ProductCard;
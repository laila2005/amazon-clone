import React, { useState } from 'react';
import { Star } from 'lucide-react';
import './ProductFilter.css';

const ProductFilter = ({ 
  categories = [], 
  selectedCategory, 
  onSelectCategory, 
  onPriceRangeChange, 
  onRatingChange 
}) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedRating, setSelectedRating] = useState(0);
  
  const handlePriceChange = (type, value) => {
    const newRange = { ...priceRange, [type]: Number(value) };
    setPriceRange(newRange);
    onPriceRangeChange && onPriceRangeChange(newRange);
  };
  
  const handleRatingClick = (rating) => {
    const newRating = selectedRating === rating ? 0 : rating;
    setSelectedRating(newRating);
    onRatingChange && onRatingChange(newRating);
  };
  
  return (
    <div className="w-full md:w-64 bg-white border border-gray-200 rounded-sm p-3 sticky top-4">
      <h3 className="font-medium text-base border-b border-gray-200 pb-2 mb-3">Filters</h3>
      
      {/* Department/Category Filter */}
      <div className="filter-section">
        <h4 className="filter-title">Department</h4>
        <div className="flex flex-col space-y-2">
          <label className="filter-item">
            <input 
              type="radio" 
              name="category" 
              checked={selectedCategory === 'all'} 
              onChange={() => onSelectCategory('all')}
              className="mr-2 accent-yellow-400"
            />
            <span className="text-sm">All Departments</span>
          </label>
          
          {categories.map(category => (
            <label key={category} className="filter-item">
              <input 
                type="radio" 
                name="category" 
                checked={selectedCategory === category} 
                onChange={() => onSelectCategory(category)}
                className="mr-2 accent-yellow-400"
              />
              <span className="text-sm capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Customer Rating */}
      <div className="filter-section">
        <h4 className="filter-title">Customer Rating</h4>
        <div className="flex flex-col space-y-2">
          {[4, 3, 2, 1].map(rating => (
            <div 
              key={rating}
              onClick={() => handleRatingClick(rating)}
              className="rating-item"
            >
              <div className="flex mr-2">
                {Array(5).fill().map((_, i) => (
                  <Star 
                    key={i}
                    size={14}
                    className={`star ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm">&amp; Up</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Range */}
      <div className="filter-section">
        <h4 className="filter-title">Price</h4>
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm">$</span>
          <input 
            type="number"
            min="0"
            max={priceRange.max}
            value={priceRange.min}
            onChange={(e) => handlePriceChange('min', e.target.value)}
            className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
          />
          <span className="text-sm">to</span>
          <span className="text-sm">$</span>
          <input 
            type="number"
            min={priceRange.min}
            value={priceRange.max}
            onChange={(e) => handlePriceChange('max', e.target.value)}
            className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
          />
        </div>
        <button 
          className="text-xs amazon-button rounded px-3 py-1 text-gray-900"
          onClick={() => onPriceRangeChange && onPriceRangeChange(priceRange)}
        >
          Go
        </button>
      </div>
      
      {/* Deals */}
      <div className="filter-section">
        <h4 className="filter-title">Deals & Discounts</h4>
        <label className="filter-item">
          <input type="checkbox" className="mr-2 accent-yellow-400" />
          <span className="text-sm">Today's Deals</span>
        </label>
      </div>
    </div>
  );
};

export default ProductFilter;

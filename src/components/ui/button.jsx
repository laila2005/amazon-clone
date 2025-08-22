import React from 'react';

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  ...props 
}) => {
  // Define base button styles
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors";
  
  // Variant styles
  const variantStyles = {
    primary: "bg-[#FFD814] hover:bg-[#F7CA00] text-black",
    secondary: "bg-[#F0F2F2] hover:bg-[#D5D9D9] text-black",
    outline: "border border-[#D5D9D9] hover:bg-[#F0F2F2] text-black",
  };
  
  // Size styles
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

const BASE_URL = 'https://fakestoreapi.com';

// Utility function to generate placeholder image URLs
export const getPlaceholderImage = (text = 'Product', width = 300, height = 300) => {
  // Use dummyimage.com which is more reliable than placeholder.com
  return `https://dummyimage.com/${width}x${height}/e0e0e0/333333&text=${encodeURIComponent(
    typeof text === 'string' ? text.substring(0, 20) : 'Product'
  )}`;
};

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await response.json();
    
    // Process the data to ensure rating is properly formatted
    // Also ensure that all products have valid image URLs
    const processedData = data.map(product => ({
      ...product,
      rating: product.rating || { rate: 0, count: 0 },
      image: product.image || getPlaceholderImage(product.title)
    }));
    
    return processedData; // Return processed products array
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Fetch a single product by ID
export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    
    const product = await response.json();
    
    // Ensure the rating object exists and has the expected properties
    // Also ensure that image property exists
    return {
      ...product,
      rating: product.rating || { rate: 0, count: 0 },
      image: product.image || getPlaceholderImage(product.title)
    };
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

// Get product categories
export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Search products
export const searchProducts = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
    
    if (!response.ok) {
      throw new Error('Failed to search products');
    }
    
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

// Get products by category
export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch products by category');
    }
    
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    throw error;
  }
};
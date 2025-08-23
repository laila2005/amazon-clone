// API utility functions for fetching data from FakeStore API
import * as productApi from '../api/productApi.js';

const API_BASE_URL = 'https://fakestoreapi.com';

/**
 * Get all products from the API
 * @param {Number} limit - Optional limit for the number of products to return
 * @returns {Promise} - Promise that resolves to an array of products
 */
export const getProducts = async (limit = null) => {
  try {
    // Use the consistent productApi implementation
    const products = await productApi.getProducts();
    
    // Apply limit if needed
    return limit ? products.slice(0, limit) : products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

/**
 * Get a single product by ID
 * @param {Number} id - The product ID
 * @returns {Promise} - Promise that resolves to a product object
 */
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};

/**
 * Get all products in a specific category
 * @param {String} category - The category name
 * @returns {Promise} - Promise that resolves to an array of products
 */
export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    return [];
  }
};

/**
 * Get all available product categories
 * @returns {Promise} - Promise that resolves to an array of category strings
 */
export const getCategories = async () => {
  try {
    // Fetch categories from the API
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    // Parse the JSON response
    const categories = await response.json();
    
    // Ensure we have an array of categories, otherwise return an empty array
    return Array.isArray(categories) ? categories : [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    // If there's an error, extract categories from our products as a fallback
    try {
      const products = await productApi.getProducts();
      const uniqueCategories = [...new Set(products.map(product => product.category))];
      return uniqueCategories;
    } catch (fallbackError) {
      console.error('Fallback category extraction failed:', fallbackError);
      return [];
    }
  }
};

/**
 * Search products by name or description (client-side search)
 * @param {String} query - The search query
 * @returns {Promise} - Promise that resolves to an array of products matching the query
 */
export const searchProducts = async (query) => {
  try {
    // Fetch all products first (API doesn't support search)
    const products = await getProducts();
    
    // Perform client-side search
    const searchLower = query.toLowerCase();
    return products.filter(product => 
      product.title.toLowerCase().includes(searchLower) || 
      (product.description && product.description.toLowerCase().includes(searchLower))
    );
  } catch (error) {
    console.error(`Error searching for products with query "${query}":`, error);
    return [];
  }
};

export default {
  getProducts,
  getProductById,
  getProductsByCategory,
  getCategories,
  searchProducts
};

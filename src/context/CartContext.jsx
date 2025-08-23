import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0
};

// Create context
export const CartContext = createContext(initialState);

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === product.id);
      
      if (existingItemIndex > -1) {
        // Item already exists in cart, update quantity
        const updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + (product.quantity || 1) };
          }
          return item;
        });
        
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalAmount = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        return { 
          ...state, 
          items: updatedItems,
          totalItems,
          totalAmount
        };
      } else {
        // Add new item to cart
        const newItem = { 
          ...product, 
          quantity: product.quantity || 1 
        };
        const updatedItems = [...state.items, newItem];
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalAmount = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        return { 
          ...state, 
          items: updatedItems,
          totalItems,
          totalAmount
        };
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      
      return { 
        ...state, 
        items: updatedItems,
        totalItems,
        totalAmount
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: id });
      }
      
      const updatedItems = state.items.map(item => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });
      
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      
      return { 
        ...state, 
        items: updatedItems,
        totalItems,
        totalAmount
      };
    }
    
    case 'CLEAR_CART':
      return initialState;
      
    default:
      return state;
  }
};

// Cart provider component
export const CartProvider = ({ children }) => {
  // Load cart from localStorage on initial render
  const loadState = () => {
    try {
      const savedState = localStorage.getItem('amazonCloneCart');
      if (savedState) {
        return JSON.parse(savedState);
      }
      return initialState;
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return initialState;
    }
  };
  
  const [state, dispatch] = useReducer(cartReducer, loadState());
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('amazonCloneCart', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [state]);
  
  // Add to cart
  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity }
    });
  };
  
  // Remove from cart
  const removeFromCart = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId
    });
  };
  
  // Update quantity
  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity }
    });
  };
  
  // Clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        totalItems: state.totalItems,
        totalAmount: state.totalAmount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

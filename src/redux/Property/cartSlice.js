import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [], // Persist cart state from localStorage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if already in the cart
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Add new property with quantity 1
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Save updated cart to localStorage
    },
    
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Save updated cart to localStorage
    },
    
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem('cartItems'); // Clear cart from localStorage
    },

    incrementQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Save to localStorage
      }
    },

    decrementQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload); // Remove item if quantity goes below 1
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Save to localStorage
      }
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;

// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
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
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;

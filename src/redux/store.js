// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './Property/propertySlice';
import cartReducer from './Property/cartSlice';

const store = configureStore({
  reducer: {
    properties: propertyReducer,
    cart: cartReducer,
  },
});

export default store;

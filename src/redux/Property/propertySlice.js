// src/store/propertySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch properties from the JSON file in the public folder
export const fetchProperties = createAsyncThunk('properties/fetchProperties', async () => {
  const response = await fetch('/data/data.json'); // Correct path to the JSON file in the public folder
  if (!response.ok) {
    throw new Error(`Failed to fetch properties, HTTP status: ${response.status}`);
  }
  const data = await response.json();
  return data;
});

const initialState = {
  properties: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  filters: {
    location: '',
    priceRange: [0, 1000],
    bedrooms: 1,
    amenities: [],
  },
};

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.filters.location = action.payload;
    },
    setPriceRange: (state, action) => {
      state.filters.priceRange = action.payload;
    },
    setBedrooms: (state, action) => {
      state.filters.bedrooms = action.payload;
    },
    setAmenities: (state, action) => {
      state.filters.amenities = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload; // Add fetched properties to state
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setLocation, setPriceRange, setBedrooms, setAmenities, resetFilters } = propertySlice.actions;

export default propertySlice.reducer;

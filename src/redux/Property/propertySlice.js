// src/store/propertySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch properties from the JSON file
export const fetchProperties = createAsyncThunk('properties/fetchProperties', async () => {
  const response = await fetch('/src/data/data.json'); // Adjust the path if needed
  const data = await response.json();
  return data;
});

const propertySlice = createSlice({
  name: 'properties',
  initialState: {
    properties: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched properties to the array
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default propertySlice.reducer;

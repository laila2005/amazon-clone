import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts as fetchProducts, getSingleProduct } from "../../api/productApi.js";

// Thunks
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => await fetchProducts()
);

export const getProductDetails = createAsyncThunk(
  "products/getProductDetails",
  async (id) => await getSingleProduct(id)
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    details:{},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // getProducts
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      // getProductDetails
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postProducts, getProducts } from "../../api";


export const createProduct = createAsyncThunk("product/create", async(params, thunkAPI) => {
     const response = await postProducts("/products", params)
     console.log(response);
     return response.data
})

export const getProduct = createAsyncThunk("get/products", async (params, thunkAPI) => {
     const response = await getProducts("/products?populate=*&filters[user][id]=2")
     console.log(response);
     return response
} )

const productSlice = createSlice({
     name: "user",
     initialState: {
       loading: false,
       error: false,
     },
     extraReducers: (builder) => {
       builder.addCase(createProduct.pending, (state, action) => {
         state.loading = true;
         state.error = false;
       });
   
       builder.addCase(createProduct.rejected, (state, action) => {
          state.loading = false;
          state.error = true;
       });
   
       builder.addCase(createProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.error = false;
       });
     },
   });
   
   export default productSlice.reducer;
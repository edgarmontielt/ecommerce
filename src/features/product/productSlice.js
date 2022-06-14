import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postProducts, get } from "../../api";


export const createProduct = createAsyncThunk("product/create", async (params, thunkAPI) => {
    const response = await postProducts("/api/products", params)
    console.log(response);
    return response.data
})

export const getProducts = createAsyncThunk("get/products", async (params, thunkAPI) => {
    const response = await get("/api/products")
    console.log(response.data);
    return response.data
})

const productSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        error: false,
        products: []
    },
    extraReducers: (builder) => {
        builder.addCase(createProduct.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
            });
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.products = action.payload.products
            });
    },
});

export default productSlice.reducer;
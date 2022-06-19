import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../api";

export const getCart = createAsyncThunk(
    'cart/getCart',
    async function (data, thunkAPI) {
        const products = await get(`/api/cart`)
        return products.data
    }
)

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async function (data, thunkAPI) {
        console.log(data);
        try {
            const newItem = await post('/api/cart/add-item', data)
            return newItem.data
        } catch (error) {
            console.log(error);
        }
    }
)

const initialState = {
    items: [],
    loading: false,
    error: false,
    total: 0
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            reducePrice(state, action) {
                state.items.reduce((res, item) => res + (item.product.price * item.amount), 0)
            }
        },
        extraReducers: (builder) => {
            builder.addCase(getCart.fulfilled, (state, action) => {
                state.error = false
                state.items = action.payload.items
                state.loading = false
                state.total = state.items.reduce((res, item) => res + (item.product.price * item.amount), 0)
            })
                .addCase(getCart.pending, (state, action) => {
                    state.error = false
                    state.items = []
                    state.loading = true
                })
                .addCase(getCart.rejected, (state, action) => {
                    state.error = true
                    state.items = []
                    state.loading = false
                })
            builder.addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload.result?.items
            })
                .addCase(addToCart.pending, (state, action) => {
                    state.loading = true
                })
                .addCase(addToCart.rejected, (state, action) => {
                    console.log(action);
                    state.loading = false
                })
        }
    }
)

export default cartSlice.reducer
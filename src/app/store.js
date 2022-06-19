import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user';
import productReducer from "../features/product"
import cartReducer from '../features/cart';

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer
  },
});

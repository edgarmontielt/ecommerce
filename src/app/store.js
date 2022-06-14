import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user';
import productReducer from "../features/product"

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import { postProducts } from "../../api";


const createProduct = createAsyncThunk("product/create", (params, thunkAPI) => {
     const response = postProducts
})
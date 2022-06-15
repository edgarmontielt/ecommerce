import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../api";

export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    const response = await post("/api/auth/login", credentials);
    console.log(response.data);
    return response.data;
  }
);

export const signUp = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    const response = await post("/api/auth/register", data);
    return response.data;
  }
);

export const validation = createAsyncThunk(
  'user/validate',
  async (data, thunkAPI) => {
    const res = await get('/api/auth/validate')
    return res.data
  }
)

const initialState = {
  logged: false,
  name: "",
  loading: false,
  error: true,
  message: "",
  id: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state, action) {
      state.logged = false;
      state.name = "";
      state.id = ""
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.logged = false;
      state.loading = true;
      state.error = false;
      state.message = "";
      state.name = "";
    })
      .addCase(login.rejected, (state, action) => {
        state.logged = false;
        state.error = true;
        state.loading = false
        state.message = action.payload.message;
        state.name = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.logged = true;
        state.error = false;
        state.loading = false;
        state.name = action.payload.user?.name;
        state.id = action.payload.user?.id;
      })
    builder.addCase(validation.fulfilled, (state, action) => {
      state.logged = true;
      state.error = false;
      state.loading = false;
      state.name = action.payload.user?.name;
      state.id = action.payload.user?.id;
    })
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

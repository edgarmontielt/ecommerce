import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "../../api";

export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    const response = await post("/auth/local", credentials);
    console.log(response.data);
    return response.data;
  }
);

export const signUp = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    const response = await post("/auth/local/register", data);
    console.log(response.data);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    logged: false,
    name: "",
    loading: false,
    error: true,
    message: "",
    id: "",
    token: "",
  },
  reducers: {
    // login(state, action) {
    //   state.logged = true;
    //   state.name = "Edgar";
    //   state.message = "Session iniciada correctamente";
    // },

    logout(state, action) {
      state.logged = false;
      state.name = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.logged = false;
      state.loading = true;
      state.error = false;
      state.message = "";
      state.name = "";
    });

    builder.addCase(login.rejected, (state, action) => {
      state.logged = false;
      state.error = true;
      state.loading = false
      state.message = action.payload.message;
      state.name = "";
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.logged = true;
      state.error = false;
      state.loading = false;
      state.name = action.payload.user?.username;
      state.id = action.payload.user?.id;
      state.token = action.payload.jwt;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

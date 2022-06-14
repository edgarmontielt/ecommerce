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
)

export const validation = createAsyncThunk(
    'user/validate',
    async (data, thunkAPI) => {
        const res = await get('/api/auth/validate')
        return res.data
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async () => {
        const res = await get('/api/auth/logout')
        return res.data
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        logged: false,
        name: "",
        loading: false,
        error: true,
        message: "",
        id: "",
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
                console.log(action.payload);
                state.logged = true;
                state.error = false;
                state.loading = false;
                state.name = action.payload.user?.name;
                state.id = action.payload.user?.id;
            })
        builder.addCase(signUp.pending, (state, action) => {
            state.logged = false;
            state.loading = true;
            state.error = false;
            state.message = "";
            state.name = "";
        })
            .addCase(signUp.rejected, (state, action) => {
                state.logged = false;
                state.error = true;
                state.loading = false
                state.message = action.payload.message;
                state.name = "";
            })
            .addCase(signUp.fulfilled, (state, action) => {
                console.log(action.payload);
                state.logged = true;
                state.error = false;
                state.loading = false;
                state.name = action.payload.user?.name;
                state.id = action.payload.user?.id;
            })
        builder.addCase(validation.fulfilled, (state, action) => {
            console.log(action.payload);
            state.logged = true;
            state.error = false;
            state.loading = false;
            state.name = action.payload.user.name;
            state.id = action.payload.user.id;
        })
            .addCase(validation.rejected, (state, action) => {
                state.logged = false;
                state.error = true;
                state.loading = false
                state.message = action.payload.message;
                state.name = "";
            })
        builder.addCase(logout.fulfilled, (state, action) => {
            console.log(action.payload);
            state.logged = true;
            state.error = false;
            state.loading = false;
            state.name = action.payload.user.name;
            state.id = action.payload.user.id;
        })
            .addCase(logout.rejected, (state, action) => {
                state.logged = false;
                state.error = true;
                state.loading = false
                state.message = action.payload.message;
                state.name = "";
            })
            .addCase(logout.pending, (state, action) => {
                state.logged = false;
                state.error = false;
                state.loading = true;
            })
    },
});
export default userSlice.reducer;

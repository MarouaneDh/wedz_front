import { createSlice } from '@reduxjs/toolkit';
import { login } from './authAsyncThunk';

const initialState = {
    auth: {
        isLoading: false,
        status: null,
        error: null,
        data: null,
        isLoggedIn: false,
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.auth.data = null;
            state.auth.status = null;
            state.auth.isLoggedIn = false;
            // removeAsyncStorageData('access_token');
        },
    },
    extraReducers: (builder) => {
        builder
            //authenticate user
            .addCase(login.pending, (state) => {
                state.auth.isLoading = true;
                state.auth.status = null
                state.auth.error = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.auth.isLoading = false;
                state.auth.status = 'fulfilled'
                state.auth.data = action.payload
                state.auth.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.auth.isLoading = false;
                state.auth.status = 'rejected';
                state.auth.error = action;
            })
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getAllLists } from './listAsyncThunk';

const initialState = {
    lists: {
        isLoading: false,
        status: null,
        error: null,
        lists: null,
    },
};

export const listSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get all lists
            .addCase(getAllLists.pending, (state) => {
                state.lists.isLoading = true;
                state.lists.status = null
                state.lists.error = null
            })
            .addCase(getAllLists.fulfilled, (state, action) => {
                state.lists.isLoading = false;
                state.lists.status = 'fulfilled'
                state.lists.lists = action.payload.response
            })
            .addCase(getAllLists.rejected, (state, action) => {
                state.lists.isLoading = false;
                state.lists.status = 'rejected';
                state.lists.error = action.payload;
            })
    },
});

export default listSlice.reducer;

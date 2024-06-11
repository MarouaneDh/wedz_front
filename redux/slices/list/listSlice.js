import { createSlice } from '@reduxjs/toolkit';
import { addNewList, getAllLists, getOneList } from './listAsyncThunk';

const initialState = {
    lists: {
        isLoading: false,
        status: null,
        error: null,
        lists: null,
    },
    oneList: {
        isLoading: false,
        status: null,
        error: null,
        list: null,
    }
};

export const listSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        resetOneListData: (state) => {
            state.oneList.list = null;
            state.oneList.status = null;
            state.oneList.error = null;
            state.oneList.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            //get all lists
            .addCase(getAllLists.pending, (state) => {
                state.lists.isLoading = true;
                state.lists.status = 'pending'
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

            //get one list
            .addCase(getOneList.pending, (state) => {
                state.oneList.isLoading = true;
                state.oneList.status = 'pending'
                state.oneList.error = null
            })
            .addCase(getOneList.fulfilled, (state, action) => {
                state.oneList.isLoading = false;
                state.oneList.status = 'fulfilled'
                state.oneList.list = action.payload.response
            })
            .addCase(getOneList.rejected, (state, action) => {
                state.oneList.isLoading = false;
                state.oneList.status = 'rejected';
                state.oneList.error = action.payload;
            })

            //add new list
            .addCase(addNewList.pending, (state) => {
                state.oneList.isLoading = true;
                state.oneList.status = 'pending'
                state.oneList.error = null
            })
            .addCase(addNewList.fulfilled, (state, action) => {
                state.oneList.isLoading = false;
                state.oneList.status = 'fulfilled'
                state.oneList.list = action.payload.response
            })
            .addCase(addNewList.rejected, (state, action) => {
                state.oneList.isLoading = false;
                state.oneList.status = 'rejected';
                state.oneList.error = action.payload;
            })
    },
});

export const { resetOneListData } = listSlice.actions;

export default listSlice.reducer;

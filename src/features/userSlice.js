import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postData = createAsyncThunk("postData", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post("https://64f0f9e18a8b66ecf77a4c66.mockapi.io/crud-redux", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const getData = createAsyncThunk("getData", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://64f0f9e18a8b66ecf77a4c66.mockapi.io/crud-redux");
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteData = createAsyncThunk("deleteData", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`https://64f0f9e18a8b66ecf77a4c66.mockapi.io/crud-redux/${id}`);
        return { id };
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const userData = createSlice({
    name: 'user',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postData.pending]: (state) => {
            state.loading = true;
        },
        [postData.fulfilled]: (state, action) => {
            state.loading = false;
            state.data.push(action.payload);
        },
        [postData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [getData.pending]: (state) => {
            state.loading = true;
        },
        [getData.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [deleteData.pending]: (state) => {
            state.loading = true;
        },
        [deleteData.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.data = state.data.filter((ele) => ele.id !== id);
            }
        },
        [deleteData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export default userData.reducer;

// toolkit // initialState // reducer => createSlicer // action ==> api createAsyunThunk

import {  createSlice } from "@reduxjs/toolkit";
import type { IinitialState,  } from "../types/types";
import { AxiosApi, fetchApi, PromisApi } from "./actions";

const initialState: IinitialState = {
    data: [],
    error: '',
    isLoading: false
}



const sliceApi =  createSlice({
    name : 'api-toolkit',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(PromisApi.pending, (state,) => {
                state.isLoading = true,
                state.data = null,
                state.error = null
            })
            .addCase(PromisApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null
            })
            .addCase(PromisApi.rejected, (state, action) => {
                state.isLoading = false;
                state.data = [];
                state.error = action.payload as string
            })
    }
})

export default sliceApi
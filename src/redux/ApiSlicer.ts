import { createSlice } from "@reduxjs/toolkit";
import type { IApiState } from "../types/type";
import { AsyncAwiatFetch, promisFetch, asyncAwaitAxios, promisAxios } from "./actionsApi";


const saveDATA = localStorage.getItem('api/toolkit/fulfilled')
const initialState:IApiState = {
    loading: false,
    error: null,
    data: saveDATA ? JSON.parse(saveDATA) : null,

}

const apiSlicer =  createSlice({
    name: 'api-toolkit/',
    initialState: initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(promisAxios.pending, (state, ) => {
                state.loading = true,  
                state.data = null
                state.error = null
            })
            .addCase(promisAxios.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null
                state.data = action.payload 
                localStorage.setItem('api/toolkit/fulfilled', JSON.stringify(action.payload))
            })
            .addCase(promisAxios.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string
                state.data = null
            })
    }
})
export default apiSlicer
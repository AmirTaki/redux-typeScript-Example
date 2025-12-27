// reducer => cretaSlicer, actions // initialState /// fetch crateA

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { IinitialState, IData } from "../types/types"


const savedStates = localStorage.getItem('apiToolkit')
const initialState: IinitialState = {
    isLoading: false, 
    error: '',
    data: savedStates ? JSON.parse(savedStates) : []
}



// createAsyncThunk<fulfilled, input data type, Error data type {rejectValue: string} >

export const fetchApi =  createAsyncThunk<IData[], void, {rejectValue: string}>(
    'api/toolkit/albums',
    async (_, {rejectWithValue}) => {

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/albums')
            if(!response.ok) {throw new Error ('خطا در برقراری ارتباط!!!!')}
            const data: Array<IData> = await response.json() 
            return data 
        }
        catch(err: any){
            return rejectWithValue(err.message || "warning")
        }
    }
)
       
    

const reducerApi =  createSlice({
    name: 'apiToolkit',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApi.pending, (state) => {
                state.error = '', 
                state.isLoading = true,
                state.data = []
            })

            .addCase(fetchApi.fulfilled, (state, action) => {
                state.error = '',
                state.isLoading = false;
                state.data = action.payload 
                localStorage.setItem('apiToolkit', JSON.stringify(action.payload))
            })
            
            .addCase(fetchApi.rejected, (state, action) => {
                state.error = action.payload as string,
                state.isLoading = false;
                state.data = []
            } )

    }
})


export default reducerApi
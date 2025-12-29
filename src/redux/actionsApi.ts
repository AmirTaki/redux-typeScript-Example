import { createAsyncThunk } from "@reduxjs/toolkit";
import type { APIDATA } from "../types/type";
import { ApiLinks } from "../apiLinks";
import axios from "axios";



//  async awiat fetch

export const AsyncAwiatFetch = createAsyncThunk<Array<APIDATA>,void , {rejectValue: string} > (
    'AsyncAwiatFetch/api-albums', 
    async(_, {rejectWithValue}) => {
        try{
            const response = await fetch (ApiLinks)
            if(!response.ok) {throw new Error('warning: fetch api !!!!')}
            const data: Array<APIDATA> = await response.json()
            return data 
        }
        catch(error: any){
            return rejectWithValue(`warning ${error.message}`)
        }
    }
) 

// promis fetch 

export const promisFetch = createAsyncThunk<Array<APIDATA>,void, {rejectValue: string}>(
    'promis-fetch/api-albums',
    (_, {rejectWithValue}) =>{
        return(
            fetch (ApiLinks)
                .then((response) => {
                    if(!response.ok){ throw new Error('api fetch !!!')}
                    return response.json() 
                })
                .catch((error) => {
                    return rejectWithValue(`warning: ${error.message}`)
                })
        )
    } 
) 


// async await axios

export const asyncAwaitAxios = createAsyncThunk<Array<APIDATA>,void, {rejectValue: string}>(
    'api-async-await axios/alubms',
    async (_, {rejectWithValue})  => {
        try{
            const response = await axios.get(ApiLinks)
            return response.data as Array<APIDATA>
        }
        catch (error: any){
            return rejectWithValue(`api fetch ${error.message}`)
        }

    }
)


// promis axios 

export const promisAxios = createAsyncThunk<Array<APIDATA>, void, {rejectValue: string}>(
    'api promis axios / api-albums',
    (_, {rejectWithValue}) => {
        return(
            axios.get(ApiLinks)
                .then((response) => {
                    return response.data as Array<APIDATA>
                })
                .catch((error: any) => {
                    return rejectWithValue(`warning: ${error.message}`)
                })
        )
    }
)
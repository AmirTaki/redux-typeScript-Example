import { createAsyncThunk } from "@reduxjs/toolkit"
import { ApiLinks } from "../api_links"
import type { IData } from "../types/types"
import axios from "axios"


// createAsynkTunk < تایپ ارور, تایپ خروجی تابع , تایپ دیتا>

export const fetchApi =  createAsyncThunk<Array<IData>, void, {rejectValue: string}>(
    'api-toolkit/albums-fetch',
    async (_,{rejectWithValue} ) => {
        try{
            const response = await fetch(ApiLinks)
            if(!response.ok) {throw new Error('warning api ??? ')}
            const data: Array<IData> = await response.json()
            return data
        }
        catch(error:any){
            return rejectWithValue(`waring: ${error.message} ` || 'warning')
        }
    }
) 



export const AxiosApi = createAsyncThunk<Array<IData> ,void, {rejectValue: string}>(
    'axios-api-redux/albums',
    async (_, {rejectWithValue}) => {
        try{
          const response = await axios.get<Array<IData>>(ApiLinks)
          return response.data
        }
        catch(error: any){
            return rejectWithValue(`warning: ${error.message}` || "")
        }
      
    }
) 


export const PromisApi = createAsyncThunk<Array<IData>, void, {rejectValue: string}>(
    'promis-api-toolkit/albums',
    (_, {rejectWithValue}) => {
        return fetch(ApiLinks)
            .then((response) => {
                if(!response.ok){throw new Error("warning ?~~~ api")}
                return response.json()
            })
            .then((data: Array<IData>) => {
                return data
            })
            .catch((error: any) => {
                return rejectWithValue (`warning: ${error.message}`)
            })
    }
) 
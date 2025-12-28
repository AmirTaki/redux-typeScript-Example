// fetch api

import type { ThunkAction } from "redux-thunk"
import { ActionType, type IData, type TAction,  } from "../types/types"
import type { RootState } from "./store"
import axios from "axios"
import { ApiLinks } from "../api_links"

// ThunkAction <تایپ اکشن های مجاز, تایپ آرگمان اضافی ,تایپ کل اپلیکیشن, تایپ خروجی تابع>

export const fetchApi = ():ThunkAction<void, RootState, unknown, TAction> => {
    return async (dispatch) => {

        dispatch({type :ActionType.ISLOADING })
        try{
            const response =  await fetch(ApiLinks)
            if(!response.ok) {throw new Error('warning api !!!')}
            const data:Array<IData> =  await response.json()
            dispatch({type: ActionType.SUCESESS, payload: data})
        }
        catch(error){
            dispatch({type: ActionType.REJECTS, payload: `warning: ${error}`})
        }
    }
}

// axios api
export const axiosApi = ():ThunkAction<void, RootState, unknown, TAction> => {
    return(dispatch) => {
        dispatch({type: ActionType.ISLOADING})
       
        axios.get(ApiLinks)
            .then((response) => {
                const data:Array<IData>  =  response.data
                dispatch({type: ActionType.SUCESESS, payload: data})
            })
            .catch((error) => {
                dispatch({type: ActionType.REJECTS, payload: `waring ${error}`})
            })
    }
}

// promis api

export const promisApi = (): ThunkAction<void, RootState, unknown, TAction> => {
    return(dispatch) => {
        dispatch({type : ActionType.ISLOADING})
        fetch(ApiLinks)
            .then((response) => {
                if(!response.ok){throw new Error('warning not server')}
                return response.json()
            })
            .then((data) => {
                dispatch ({type: ActionType.SUCESESS, payload: data})
            })
            .catch((error) => {
                dispatch({type: ActionType.REJECTS, payload: `warning: ${error}`})
            })
    } 
}
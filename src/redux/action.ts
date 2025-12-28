import {   type ThunkAction } from "@reduxjs/toolkit"
import { ActionTypeCounter, type TActionCounter, ActionTypeList,  type TActionList, type TActionApi, ActionTypeApi, type IDataApi } from "../types/type"
import type { RootState } from "./store"
import { ApiLinks } from "../apiLinks"
import axios from "axios"

// counter 
export const IcraseCounter = ():TActionCounter => {
    return {type:ActionTypeCounter.INCRASE }
}

export const DecraseCounter = ():TActionCounter => {
    return {type: ActionTypeCounter.DECRASE}
}

export const EditValueCounter = (value: number):TActionCounter => {
    return {type: ActionTypeCounter.EDITVALUE, payload: {value}}
}


/////////////////////////////////////////////////////////////////////////
// list to dos

export const AddToList = ():TActionList => {
    return {type: ActionTypeList.ADDTOLIST }
}

export const RemoveToList = (id: string):TActionList => {
    return {type: ActionTypeList.REMOVETOLIST, payload: {id}}
}

export const EditeToValueList = (text: string):TActionList => {
    return {type: ActionTypeList.EDITTEXTLIST, payload: {text}}
}

/////////////////////////////////////////////////////////////////////////
// api

// fetch 
export const fetchApi = (): ThunkAction<void, RootState, unknown, TActionApi> => {
    return async (dispatch) => {
        dispatch({type: ActionTypeApi.PENDENG})
        try{
            const response = await fetch(ApiLinks)
            if(!response.ok){throw new Error('warning api !!!')}
            const data: Array<IDataApi> = await response.json()
            dispatch({type: ActionTypeApi.FUILLFILD, payload: data})
        }
        catch(error: any) {
            dispatch({type: ActionTypeApi.REJECT, payload: `waring : ${error.message}`})
        }
    }
}



// axios
export const axiosApi = (): ThunkAction<void, RootState, unknown, TActionApi > => {
    return  (dispatch) => {
        dispatch({type: ActionTypeApi.PENDENG})

        axios.get(ApiLinks)
            .then((response) => {
                const data:Array<IDataApi> =  response.data
                dispatch({type: ActionTypeApi.FUILLFILD, payload: data})
            })
            .catch((error) => {
                dispatch({type: ActionTypeApi.REJECT, payload: `waring: ${error.message}`})
            })
    }
}

// promis

export const promisApi = ():ThunkAction<void, RootState, unknown, TActionApi> => {
    return (dispatch) => {
        dispatch({type : ActionTypeApi.PENDENG})
        fetch(ApiLinks)
            .then((response) => {
                if(!response.ok) {throw new Error('warning : api !!!! ')}
                return response.json()
            })
            .then((data: Array<IDataApi>) => {
                dispatch({type: ActionTypeApi.FUILLFILD, payload: data})
            })
            .catch((error:any) => {
                dispatch({type: ActionTypeApi.REJECT, payload: `warning: ${error.message}`})
            })
    }
}
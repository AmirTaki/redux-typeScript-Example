import type { ThunkAction } from "redux-thunk"
import { actionTypeApi, actionTypeCounter, actionTypeToDoList } from "../types/types"
import type { IApiState, IDataApi, TActionApi, TActionCounter, TActionToDoList } from "../types/types"
import type { RootState } from "./store"

// counter
export const IncraseCounter = (): TActionCounter => {
    return {type : actionTypeCounter.INCRASE}
}

export const DecraseCounter = (): TActionCounter => {
    return {type : actionTypeCounter.DECRASE}
}

export const EditValueCounter = (value: number): TActionCounter => {
    return {type: actionTypeCounter.EIDTVALUE, payload: {value}}
}


// todolist 

export const AddToDos = (text: string):TActionToDoList => {
    return {type : actionTypeToDoList.ADDTOLIST, payload: {text}}
}


export const RemoveToDos = (id: string):TActionToDoList => {
    return {type: actionTypeToDoList.REMOVETOLIST, payload : {id}}
}


export const EditTextToDos = (text: string):TActionToDoList => {
    return {type: actionTypeToDoList.EDITTEXT, payload: {text}}
}

// api

export const FetchApi = ():ThunkAction<void, RootState, unknown,  TActionApi> => {
    return async (dispatch) => {
        dispatch({type :actionTypeApi.LOADING })
        try {
            const  response =  await fetch('https://jsonplaceholder.typicode.com/posts')
            const data:Array<IDataApi> =  await response.json()
            dispatch({type: actionTypeApi.SUCCSESS, payload: data})
        }
        catch(error: any){
            dispatch({type: actionTypeApi.REJECT, payload: error.message})
        }

    }
}
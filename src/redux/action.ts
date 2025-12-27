import type { ThunkAction } from "redux-thunk"
import { actionType, type TAction } from "../types/types"
import type { RootStore } from "./store"
import type { IAlbumsApi } from "../types/types"

const apiFetch = ():ThunkAction<void, RootStore, unknown,  TAction> => {
    return async (dispatch) => {
        // loading 
        dispatch({type : actionType.LOADING})
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/albums')
            const data: Array<IAlbumsApi> =  await response.json()
            // success
            dispatch({type: actionType.SUCCESS, payload: data})
        }
        catch(error) {
            // reject
            dispatch({type: actionType.REJECT, payload: `warning: ${error}`})
        }
    } 
}

export default apiFetch






// const apiFetch = (): ThunkAction<void, RootStore, unknown, TAction> => {
//     return async (dispatch) =>{
//         // loading
//         dispatch({type : actionType.LOADING})

//         await fetch("https://jsonplaceholder.typicode.com/albums")
//             .then((response) => response.json())
//             // success
//             .then((data:Array<IAlbumsApi>)  => {dispatch({type: actionType.SUCCESS, payload: data})})
//             // rejects
//             .catch((error) => {
//                 console.log(error, 'error')
//                 dispatch({type: actionType.REJECT, payload:`warning: ${error}` })
//             }) 
//     }
// }

// export default apiFetch
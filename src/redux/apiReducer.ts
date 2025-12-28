import { ActionTypeApi, type ISateApi, type TActionApi } from "../types/type"

const savedStata = localStorage.getItem('api-redux/')
const initialState:ISateApi = {
    loading: false,
    data: savedStata? JSON.parse(savedStata) : [],
    error: ''
}
const reducerApi = (state = initialState, action: TActionApi): ISateApi => {
    switch(action.type){
        case ActionTypeApi.PENDENG:
            return {...state, loading: true, data: null, error: null}

        case ActionTypeApi.FUILLFILD: 
            localStorage.setItem('api-redux/', JSON.stringify(action.payload))
            return {...state, loading: false, data: action.payload, error: null}
        
        case ActionTypeApi.REJECT:
            return {...state, loading: false, data: null, error: action.payload}
        
        default:
            return state
    }
}

export default reducerApi;
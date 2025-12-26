import { actionTypeApi, type IApiState, type TActionApi } from "../types/types"

const savedStates = localStorage.getItem('apiRequestSTATE')

const initialState:IApiState = {
    data: savedStates ? JSON.parse(savedStates) : [],
    error: '',
    isLoading: false
}

const ReducerApi = (state = initialState , action:TActionApi) :IApiState => {
    switch(action.type){
        case actionTypeApi.LOADING:
            return {...state, isLoading: true, data: [], error: ''}

        case actionTypeApi.SUCCSESS :
            localStorage.setItem('apiRequestSTATE', JSON.stringify(action.payload)) 
            return {...state, isLoading: false, data: action.payload, }

        case actionTypeApi.REJECT : 
            return {...state, isLoading: false, data: [], error: action.payload}   

        default : 
            return state
    }
}

export default ReducerApi
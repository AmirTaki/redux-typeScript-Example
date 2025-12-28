import { ActionType, type IinitialState, type TAction } from "../types/types"

// initila State 
const initialState: IinitialState = {
    isLoading: false,
    data: [],
    error: ''
}



/// reducer

const reducerApi = (state = initialState, action: TAction): IinitialState => {
    switch(action.type){
        case ActionType.ISLOADING:
            return {...state, isLoading: true, data: null, error: null}

        case ActionType.SUCESESS :  
            return {...state, isLoading: false, data: action.payload, error: null}
        
        case ActionType.REJECTS :
            return {...state, isLoading: false, error: action.payload, data: null }
        default: 
            return state
    }
}
/// 

export default reducerApi;
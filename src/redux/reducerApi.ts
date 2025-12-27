// action // reducer /// api request 
import { actionType, type IinitialState, type TAction } from "../types/types"


const savedState = localStorage.getItem('apiAlbums')
const initialState:IinitialState =  {
    isLoading: false,
    // data: savedState ? JSON.parse(savedState) : [],
    data: [],
    error: ''
}


const reducer = (state = initialState, action: TAction): IinitialState => {
    switch(action.type){
        case actionType.LOADING: 
            return {...state, isLoading: true, data: null, error: null}
        
        case actionType.SUCCESS: 
            localStorage.setItem('apiAlbums', JSON.stringify(action.payload))
            return {...state, data: action.payload, isLoading: false}

        case actionType.REJECT: 
            return {...state, isLoading: false, data: [],  error: action.payload }
        default : 
            return state
    }
}


export default reducer
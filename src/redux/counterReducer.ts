import { ActionTypeCounter, type ICounterState } from "../types/type"
import type { TActionCounter } from "../types/type"

const savedState = localStorage.getItem('counter/localStorage/redux')

const initialState: ICounterState = {   
    counter: savedState ? JSON.parse(savedState) : 0, 
    value: 1
}
const CounterReducer = (state = initialState, action: TActionCounter): ICounterState => {
 
    switch(action.type){
        case ActionTypeCounter.INCRASE:
            const Incrase = state.counter + state.value  
            localStorage.setItem('counter/localStorage/redux', JSON.stringify(Incrase))
            return{...state, counter: Incrase }
            
        case ActionTypeCounter.DECRASE: 
            const Decrase = state.counter - state.value
            localStorage.setItem('counter/localStorage/redux', JSON.stringify(Decrase))
            return {...state, counter: Decrase}
        
        case ActionTypeCounter.EDITVALUE:  
            return {...state, value: action.payload.value}

        default :
            return state
    }
}

export default CounterReducer 
import type { ICounterState } from "../types/types"
import  { actionTypeCounter } from "../types/types"
import type { TActionCounter } from "../types/types"

const savedState = localStorage.getItem('counterState')
const initialState: ICounterState = {
    counter: savedState ? JSON.parse(savedState) : 0, 
    value: 1
}

const reducerCounter = (state = initialState, action: TActionCounter): ICounterState => {
    switch(action.type){
        case actionTypeCounter.INCRASE : 
            const incraseCounter = state.counter + state.value 
            localStorage.setItem('counterState', JSON.stringify(incraseCounter))
            return {...state, counter: incraseCounter }
        
        case actionTypeCounter.DECRASE :
            const decraseCounter = state.counter - state.value
            localStorage.setItem('counterState', JSON.stringify(decraseCounter))
            return {...state, counter: decraseCounter}

        case actionTypeCounter.EIDTVALUE : 
            return {...state, value: action.payload.value

            }
        default: 
            return state
    }
}

export default reducerCounter
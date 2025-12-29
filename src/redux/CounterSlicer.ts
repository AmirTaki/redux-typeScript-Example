// reducer -> creatSlice, action / initialState 
import { createSlice } from '@reduxjs/toolkit'
import type { ICounterState } from '../types/type'

const savedLocal = localStorage.getItem('counter/toolkit/local')
const initialState: ICounterState = {
    counter: savedLocal? JSON.parse(savedLocal) : 0, 
    value: 1
}

const CounterSlicer =  createSlice({
    name: 'counter-toolkit',
    initialState: initialState,
    reducers: {
        Incrase: (state, ) => {
            state.counter = state.counter + state.value
            localStorage.setItem('counter/toolkit/local', JSON.stringify(state.counter))
        },
        Decrase: (state) => {
            state.counter = state.counter - state.value;
            localStorage.setItem('counter/toolkit/local', JSON.stringify(state.counter))
        },
        EditValueCounter: (state, action) => {
            state.value = action.payload.value
        }

    },
    extraReducers: () => {}

})
export const {Incrase, Decrase, EditValueCounter} =  CounterSlicer.actions 
export default CounterSlicer
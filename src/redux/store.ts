import {  combineReducers, createStore,  } from "redux";
import reducerCounter from "./counterReducer";
const reducers = combineReducers({
    counter: reducerCounter
})

const store = createStore(reducers)
export default store;


export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
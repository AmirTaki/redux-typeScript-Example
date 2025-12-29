import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterSlicer from "./redux/CounterSlicer";
import listSlicer from "./redux/ListSlicer";
import apiSlicer from "./redux/ApiSlicer";

const reducers = combineReducers({
    counter: CounterSlicer.reducer, // counter
    list: listSlicer.reducer, // list todos
    api : apiSlicer.reducer
})

const store =  configureStore({ reducer: reducers})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
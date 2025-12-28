import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceApi from "./reducer";

const reducers =  combineReducers({
    Api: sliceApi.reducer
})

const store =  configureStore({
    reducer:  reducers
})

export default store

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch
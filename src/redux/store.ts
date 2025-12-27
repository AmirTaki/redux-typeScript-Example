import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerApi from "./slicer";
const reducers = combineReducers({
    api : reducerApi.reducer
})

const store =  configureStore(({
    reducer: reducers 
}))
export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerApi from "./reducer";
import { thunk } from "redux-thunk";


const reducers = combineReducers ({
    api : reducerApi
})
const store =  createStore(reducers, {}, applyMiddleware(thunk))
export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
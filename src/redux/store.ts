import { applyMiddleware, combineReducers, createStore } from "redux";
import reducer from "./reducerApi";
import { thunk } from "redux-thunk";

const reducers =  combineReducers({
    api: reducer
})

const store = createStore(reducers, {}, applyMiddleware(thunk))
export default store


export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
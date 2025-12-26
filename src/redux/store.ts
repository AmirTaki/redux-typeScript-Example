import {   applyMiddleware, combineReducers, createStore,  } from "redux";
import reducerCounter from "./counterReducer";
import reducerTodoList from "./todoListReducer";
import ReducerApi from "./apiReducer";
import { thunk } from "redux-thunk";


const reducers = combineReducers({
    counter: reducerCounter,
    todos: reducerTodoList,
    api : ReducerApi
})


const store = createStore(reducers,{}, applyMiddleware(thunk))
export default store;


export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch


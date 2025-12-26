import {  combineReducers, createStore,  } from "redux";
import reducerCounter from "./counterReducer";
import reducerTodoList from "./todoListReducer";
const reducers = combineReducers({
    counter: reducerCounter,
    todos: reducerTodoList,
})

const store = createStore(reducers)
export default store;


export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
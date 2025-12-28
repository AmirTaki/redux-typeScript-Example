import { applyMiddleware, combineReducers, createStore } from "redux";
import CounterReducer from "./counterReducer";
import reducerList from "./listReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import reducerApi from "./apiReducer";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
    counter: CounterReducer, // counter
    list: reducerList,        // todos list
    api : reducerApi

})

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))
export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
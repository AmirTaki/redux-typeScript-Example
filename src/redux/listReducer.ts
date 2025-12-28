import { ActionTypeList, type IListState, type TActionList } from "../types/type"
import { v4 as uuidv4 } from 'uuid';

const savedSates = localStorage.getItem('redux/list')
const initialState: IListState = {
    todos: savedSates ? JSON.parse(savedSates) : [{text: 'text', id : 'A'}], 
    text: ''
}


const reducerList = (state =  initialState, action: TActionList):IListState => {
    switch(action.type){

        case ActionTypeList.ADDTOLIST : 
            const addList =  state.text ? [...state.todos, {text: state.text, id: uuidv4()}] : [...state.todos]
            localStorage.setItem('redux/list', JSON.stringify(addList))
            return {...state, todos: addList, text: ''}
            
        case ActionTypeList.REMOVETOLIST: 
            const removeList = [...state.todos.filter((item) => item.id !== action.payload.id)]
            localStorage.setItem('redux/list', JSON.stringify(removeList))
            return {...state, todos: removeList}

        case ActionTypeList.EDITTEXTLIST: 
            return {...state, text: action.payload.text}           


        default: 
            return state
    }
}

export default reducerList
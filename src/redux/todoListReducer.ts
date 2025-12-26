import { v4 as uuid } from 'uuid';
import { actionTypeToDoList, type ItodoListState, type TActionToDoList } from "../types/types"

const savedStates = localStorage.getItem('todosListState')
const initilState: ItodoListState = {
    todos: savedStates ? JSON.parse(savedStates) : [],
    text : '' 
}


const reducerTodoList = (state = initilState, action:TActionToDoList) : ItodoListState => {
  
    switch(action.type) {
        case actionTypeToDoList.ADDTOLIST :
            const add = state.text ?  [...state.todos, {text: state.text, id: uuid()}] : [...state.todos]
            localStorage.setItem('todosListState', JSON.stringify(add))
            return {...state, todos: add}
        
        case actionTypeToDoList.REMOVETOLIST:
            const remove = [...state.todos.filter((item) => item.id !== action.payload.id)]
            localStorage.setItem('todosListState', JSON.stringify(remove))
            return {...state, todos: remove }

        case actionTypeToDoList.EDITTEXT :
            return {...state, text: action.payload.text}
        
        default: 
            return state
    }

}

export default reducerTodoList;
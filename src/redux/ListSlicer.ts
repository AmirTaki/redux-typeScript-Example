import { v4 as uuidv4 } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";
import type { IListSlicer } from '../types/type';

const savedTodos = localStorage.getItem('todos-toolkit/local')

const initialState:IListSlicer =  {
    todos: savedTodos ? JSON.parse(savedTodos) : [], 
    text: ''
}

const listSlicer = createSlice({
    name: 'list-toolkit-slicer',
    initialState : initialState,
    reducers: {
        addToList: (state,) => {
            state.text ? state.todos.push({text: state.text, id: uuidv4()}) : state.todos
            state.text = ''
            localStorage.setItem('todos-toolkit/local', JSON.stringify(state.todos))
        },
        removeToList: (state, action) => {
            state.todos =  state.todos.filter((item) => item.id !== action.payload.id)
            localStorage.setItem('todos-toolkit/local', JSON.stringify(state.todos))
        },
        editTextList:(state, action) => {
            state.text = action.payload.text
        }
        
    },
    extraReducers: () => {}, 
})

export const {addToList, removeToList, editTextList} = listSlicer.actions
export default listSlicer
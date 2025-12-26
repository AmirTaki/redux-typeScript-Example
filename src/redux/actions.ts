import { actionTypeCounter, actionTypeToDoList } from "../types/types"
import type { TActionCounter, TActionToDoList } from "../types/types"

// counter
export const IncraseCounter = (): TActionCounter => {
    return {type : actionTypeCounter.INCRASE}
}

export const DecraseCounter = (): TActionCounter => {
    return {type : actionTypeCounter.DECRASE}
}

export const EditValueCounter = (value: number): TActionCounter => {
    return {type: actionTypeCounter.EIDTVALUE, payload: {value}}
}


// todolist 

export const AddToDos = (text: string):TActionToDoList => {
    return {type : actionTypeToDoList.ADDTOLIST, payload: {text}}
}


export const RemoveToDos = (id: string):TActionToDoList => {
    return {type: actionTypeToDoList.REMOVETOLIST, payload : {id}}
}


export const EditTextToDos = (text: string):TActionToDoList => {
    return {type: actionTypeToDoList.EDITTEXT, payload: {text}}
}
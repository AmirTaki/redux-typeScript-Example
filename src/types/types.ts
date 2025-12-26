// counter
export interface ICounterState { counter: number, value: number}
export enum actionTypeCounter {
    INCRASE = 'incrase',
    DECRASE = 'decrase',
    EIDTVALUE = 'editValue'

}
interface incraseCounter {type : actionTypeCounter.INCRASE }
interface decraseCounter {type : actionTypeCounter.DECRASE}
interface EditValue {type: actionTypeCounter.EIDTVALUE, payload: {value: number}}

export type TActionCounter = incraseCounter | decraseCounter | EditValue

// --------------------------------------------------------------------------------
// todoList 
export interface ItodoListState {
    todos: Array<{text : string, id: string}>,
    text: string
}

export enum actionTypeToDoList {
    ADDTOLIST = 'addToList',
    REMOVETOLIST = 'removeToList',
    EDITTEXT = 'editText'
}

interface addToList {type : actionTypeToDoList.ADDTOLIST, payload: {text: string, id?: string} }
interface removeToList {type: actionTypeToDoList.REMOVETOLIST, payload: {id: string}}
interface EditTextToList {type: actionTypeToDoList.EDITTEXT, payload: {text: string}}

export type TActionToDoList = addToList | removeToList| EditTextToList

// --------------------------------------------------------------------------------


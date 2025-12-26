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

// api 

export interface IDataApi  {
    userId: number,
    id: number, 
    title: string, 
    body: string
}
export interface IApiState {
    data: Array<IDataApi>,
    error : string | null,
    isLoading: boolean
}

export enum actionTypeApi {
    LOADING = 'loading',
    SUCCSESS = 'sucsess',
    REJECT = 'reject'
}

interface LoadingApi { type: actionTypeApi.LOADING }
interface SucsessApi {type : actionTypeApi.SUCCSESS, payload: Array<IDataApi>}
interface RejectApi {type : actionTypeApi.REJECT, payload: string | null}

export type TActionApi = LoadingApi | SucsessApi | RejectApi

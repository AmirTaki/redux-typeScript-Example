// counter
export interface ICounterState {
    counter: number, 
    value: number
}
export enum ActionTypeCounter {
    INCRASE = 'INCRASE',
    DECRASE = 'DECRASE',
    EDITVALUE = 'EDITVALUE'
}

interface IncraseAction {
    type : ActionTypeCounter.INCRASE
}

interface DecraseAction {
    type: ActionTypeCounter.DECRASE,
}

interface EditValueAction {
    type: ActionTypeCounter.EDITVALUE, 
    payload: {value: number}
}

export type TActionCounter = IncraseAction | DecraseAction | EditValueAction


/////////////////////////////////////////////////////////////////////////
// list to dos

export interface IListState {
    todos: Array<{text: string , id: string}>,
    text: string 

}

export enum ActionTypeList {
    ADDTOLIST = 'ADDTOLIST',
    REMOVETOLIST = 'REMOVETOLIST',
    EDITTEXTLIST = 'EDITTEXTLIST'
}
interface AddToList {
    type : ActionTypeList.ADDTOLIST,
    payload? : {text: string, id: string}
}

interface RemoveToList {
    type: ActionTypeList.REMOVETOLIST,
    payload: {id: string}
}

interface EditeToValueList {
    type: ActionTypeList.EDITTEXTLIST,
    payload: {text: string}
}

export type TActionList =  AddToList | RemoveToList | EditeToValueList

//////////////////////////////////////////////////////////////////////////
// api 
export interface IDataApi {
    id: number, 
    userId: number, 
    title: string
}

export interface ISateApi {
    loading: boolean,
    data: Array<IDataApi> | null,
    error: string | null
} 

export enum ActionTypeApi {
    PENDENG  = 'PENDENG',
    FUILLFILD = 'FUILLFILD',
    REJECT = 'REJECT'
}

interface PendeincApi {
    type : ActionTypeApi.PENDENG,
}

interface FuillfildApi {
    type: ActionTypeApi.FUILLFILD, 
    payload: Array<IDataApi>
}

interface RejectApi {
    type: ActionTypeApi.REJECT,
    payload: string
}
export type TActionApi = PendeincApi | FuillfildApi | RejectApi
export interface IAlbumsApi {
    userId: number
    id: number
    title: string
}
export interface IinitialState  {
    isLoading: boolean, 
    data: Array<IAlbumsApi> | null,
    error : null  | string
}

export enum actionType {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    REJECT = 'REJECT'
}



interface actionLoding {
    type : actionType.LOADING,
}

interface actionSuccess {
    type: actionType.SUCCESS,
    payload: Array<IAlbumsApi> 
}

interface actionReject {
    type: actionType.REJECT,
    payload: string
}
export type TAction = actionLoding | actionSuccess | actionReject
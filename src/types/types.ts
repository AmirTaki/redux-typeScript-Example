export interface IData {
    id: number,
    userId: number,
    title: string   
}
export interface IinitialState {
    isLoading: boolean, 
    data: Array<IData> | null,
    error: null | string
}

export enum ActionType {
    ISLOADING = 'ISLOADING',
    SUCESESS = 'SUCESESS',
    REJECTS = 'REJECTS'
}

interface ActionLoading {
    type : ActionType.ISLOADING
}
interface ActionSucces {
    type: ActionType.SUCESESS,
    payload: Array<IData>
}

interface ActionRejects {
    type: ActionType.REJECTS,
    payload: string 
}
export type TAction = ActionLoading | ActionSucces | ActionRejects



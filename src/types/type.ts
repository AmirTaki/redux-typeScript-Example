// counter

export interface ICounterState {
    counter: number, 
    value: number
}

/// todolist

export   interface IListSlicer {
    todos : Array<{text: string, id: string}>,
    text: string
}
/// api

export interface APIDATA {
    id: number, 
    userId: number, 
    title: number
}

export interface IApiState {
    data: Array<APIDATA> | null,
    error: null | string, 
    loading: boolean
    
}
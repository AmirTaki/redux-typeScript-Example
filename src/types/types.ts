export interface IData {
    id: number, 
    userId: number, 
    title: string
}
export interface IinitialState {
    isLoading: boolean;
    error:   string ;
    data: Array<IData> 
}



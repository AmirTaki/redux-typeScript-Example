export interface IData {
    id: number, 
    userId: number, 
    title: string
}
export interface IinitialState {
    data: Array<IData> | null,
    error: string | null,
    isLoading: boolean
}
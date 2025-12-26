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
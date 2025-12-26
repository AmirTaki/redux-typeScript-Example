import { actionTypeCounter } from "../types/types"
import type { TActionCounter } from "../types/types"

export const IncraseCounter = (): TActionCounter => {
    return {type : actionTypeCounter.INCRASE}
}

export const DecraseCounter = (): TActionCounter => {
    return {type : actionTypeCounter.DECRASE}
}

export const EditValueCounter = (value: number): TActionCounter => {
    return {type: actionTypeCounter.EIDTVALUE, payload: {value}}
}


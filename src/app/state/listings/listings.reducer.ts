import { createReducer } from "@ngrx/store";
import { initialState } from "./listings.state"

const _listReducer = createReducer(initialState)

export function listReducer(state: any, action: any) {
    return _listReducer(state, action)
}
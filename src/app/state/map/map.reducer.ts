import { createReducer } from "@ngrx/store";
import { initialState } from "./map.state";

const _mapReducer = createReducer(initialState)

export function mapReducer(state: any, action: any) {
    return _mapReducer(state, action)
}
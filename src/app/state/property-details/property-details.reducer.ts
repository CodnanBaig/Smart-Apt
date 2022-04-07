import { createReducer } from "@ngrx/store";
import { initialState } from "./property-details.state";

const _listSpecificReducer = createReducer(initialState)

export function listSpecificReducer(state: any, action: any) {
    return _listSpecificReducer(state, action)
}
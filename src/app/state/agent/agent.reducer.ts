import { createReducer } from "@ngrx/store";
import { initialState } from "./agent.state"

const _agentReducer = createReducer(initialState)

export function agentReducer(state: any, action: any) {
    return _agentReducer(state, action)
}
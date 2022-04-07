import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AgentState } from "./agent.state";

const getAgentState = createFeatureSelector<AgentState>('agent')

export const showAgent = createSelector(getAgentState, (state) => {
    console.log(state.agentInfo)
    return state.agentInfo;
})
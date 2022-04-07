import { ListState } from "./listings/listings.state";
import { listReducer } from "./listings/listings.reducer";
import { listSpecificReducer } from "./property-details/property-details.reducer"
import { AgentState } from "./agent/agent.state";
import { agentReducer } from "./agent/agent.reducer";
import { MapState } from "./map/map.state";
import { mapReducer } from "./map/map.reducer";
import { PropertyDetailsState } from "./property-details/property-details.state";

export interface AppState {
    list: ListState;
    agent: AgentState;
    geo: MapState;
    details: PropertyDetailsState;
}

export const appReducer = {
    list: listReducer,
    agent: agentReducer,
    map: mapReducer,
    details: listSpecificReducer,
}
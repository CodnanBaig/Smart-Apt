import { AgentInfo } from "src/app/models/agent.model"

export interface AgentState {
    agentInfo: AgentInfo[];
}

export const initialState: AgentState = {
    "agentInfo": [
        {
            "accountID": 2360,
            "firstname": "Cindy",
            "lastname": "Little",
            "company": "Apartment Agents",
            "splashMessage": "",
            "customHeader": ""
        }
    ]
} 
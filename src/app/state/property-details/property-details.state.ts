import { Listings } from "src/app/models/listings.model";

export interface PropertyDetailsState {
    planSpecificDetail: Listings[];
}

export const initialState: PropertyDetailsState = {
    "planSpecificDetail": []
}
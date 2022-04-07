import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PropertyDetailsState } from "./property-details.state";

const getSpecificState = createFeatureSelector<PropertyDetailsState>('details')

export const getListSpecific = createSelector(getSpecificState, (state) =>{
    return state.planSpecificDetail
})
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MapState } from "./map.state";

const getMapState = createFeatureSelector<MapState>('map')

export const getMap = createSelector(getMapState, (state) => {
    return state.geocode;
})
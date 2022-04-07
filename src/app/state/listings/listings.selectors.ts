import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ListState } from "./listings.state";

const getListState = createFeatureSelector<ListState>('list')

export const getList = createSelector(getListState, (state) =>{
    return state.records
})
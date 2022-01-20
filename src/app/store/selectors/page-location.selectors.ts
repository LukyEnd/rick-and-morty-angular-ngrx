import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPageLocation from '../reducers/page-location.reducer';

export const selectPageLocationState = createFeatureSelector<fromPageLocation.LocationState>(
	fromPageLocation.pageLocationFeatureKey
);

export const getPageLocationSuccess = createSelector(selectPageLocationState, (state) => state.locationData);

export const getPageLocationError = createSelector(selectPageLocationState, (state) => state.error);

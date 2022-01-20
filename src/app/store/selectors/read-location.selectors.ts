import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReadLocation from '../reducers/read-location.reducer';

export const selectReadLocationState = createFeatureSelector<fromReadLocation.LocationStateRead>(
  fromReadLocation.readLocationFeatureKey
);

export const getReadLocationSuccess = createSelector(selectReadLocationState, (state) => state.locationDataSingle);

export const getReadLocationError = createSelector(selectReadLocationState, (state) => state.erro);
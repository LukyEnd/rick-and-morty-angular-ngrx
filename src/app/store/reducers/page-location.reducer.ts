import { createReducer, on } from '@ngrx/store';
import * as PageLocationActions from '../actions/page-location.actions';
import { ApiLocationModel } from './../../service/model/location.model';

export const pageLocationFeatureKey = 'pageLocation';

export interface LocationState {
	locationData: ApiLocationModel[];
	loading: boolean;
	error: string;
}

export const initialState: LocationState = {
	locationData: [],
	loading: true,
	error: '',
};

export const locationReducer = createReducer(
	initialState,
	on(PageLocationActions.loadPageLocationsSuccess, (state, action): LocationState => {
		return {
			...state,
			locationData: action.locationData,
			error: '',
		};
	}),
	on(PageLocationActions.loadLoadingPage, (state, action) => {
		return {
			...state,
			loading: action.loading,
		};
	}),
	on(PageLocationActions.loadPageLocationsFailure, (state, action): LocationState => {
		return {
			...state,
			locationData: [],
			error: action.error,
		};
	})
);

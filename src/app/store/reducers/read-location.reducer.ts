import { createReducer, on } from '@ngrx/store';
import { ApiLocationModel } from 'src/app/service/model/location.model';
import * as ReadLocationActions from '../actions/read-location.actions';

export const readLocationFeatureKey = 'readLocation';

export interface LocationStateRead {
	locationDataSingle: ApiLocationModel | null;
	erro: string;
}

export const initialState: LocationStateRead = {
	locationDataSingle: null,
	erro: '',
};

export const locationReducer = createReducer(
	initialState,

	on(ReadLocationActions.loadReadLocationsSuccess, (state, action): LocationStateRead => {
		return {
			...state,
			locationDataSingle: action.locationDataSingle,
			erro: '',
		};
	}),
	on(ReadLocationActions.loadReadLocationsFailure, (state, action): LocationStateRead => {
		return {
			...state,
			locationDataSingle: null,
			erro: action.error,
		};
	})
);

import { ApiLocationModel } from './../../service/model/location.model';
import { createAction, props } from '@ngrx/store';

export const loadPageLocations = createAction('[PageLocation] Load PageLocations', props<{ urlBase: string }>());

export const loadPageLocationsSuccess = createAction(
	'[PageLocation] Load PageLocations Success',
	props<{ locationData: ApiLocationModel[] }>()
);

export const loadLoadingPage = createAction('[LoadingPage] Load Loading Page', props<{ loading: boolean }>());

export const loadPageLocationsFailure = createAction(
	'[PageLocation] Load PageLocations Failure',
	props<{ error: string }>()
);

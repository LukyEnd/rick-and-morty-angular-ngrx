import { createAction, props } from '@ngrx/store';
import { ApiLocationModel } from 'src/app/service/model/location.model';

export const loadReadLocations = createAction(
  '[ReadLocation] Load ReadLocations',
  props<{ urlBase: string }>()
);

export const loadReadLocationsSuccess = createAction(
  '[ReadLocation] Load ReadLocations Success',
  props<{ locationDataSingle: ApiLocationModel }>()
);

export const loadReadLocationsFailure = createAction(
  '[ReadLocation] Load ReadLocations Failure',
  props<{ error: string }>()
);

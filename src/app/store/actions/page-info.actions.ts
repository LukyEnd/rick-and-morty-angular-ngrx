import { ApiPageModel } from './../../service/model/page.module';
import { createAction, props } from '@ngrx/store';

export const loadPageInfos = createAction(
  '[PageInfo] Load PageInfos',
  props<{ urlBase: string }>()
);

export const loadPageInfosSuccess = createAction(
  '[PageInfo] Load PageInfos Success',
  props<{ infoUrl: ApiPageModel }>()
);

export const loadPageInfosFailure = createAction(
  '[PageInfo] Load PageInfos Failure',
  props<{ error: string }>()
);

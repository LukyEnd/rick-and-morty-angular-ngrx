import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPageInfo from '../reducers/page-info.reducer';

export const selectPageInfoState = createFeatureSelector<fromPageInfo.InfoState>(
  fromPageInfo.pageInfoFeatureKey
);
export const getPageInfoSuccess = createSelector(
  selectPageInfoState,
  (state) => state.infoUrl
);

export const getPageInfoError = createSelector(
  selectPageInfoState,
  (state) => state.error
);

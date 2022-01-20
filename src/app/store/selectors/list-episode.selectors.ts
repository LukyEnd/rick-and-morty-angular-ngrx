import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromListEpisode from '../reducers/list-episode.reducer';

export const selectListEpisodeState = createFeatureSelector<fromListEpisode.ListEpisodeState>(
  fromListEpisode.listEpisodeFeatureKey
);
export const getListEpisode = createSelector(
  selectListEpisodeState,
  (state) => state.listEpisode
);


import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPageEpisode from '../reducers/page-episode.reducer';

export const selectPageEpisodeState = createFeatureSelector<fromPageEpisode.EpisodeState>(
  fromPageEpisode.pageEpisodeFeatureKey
);

export const getPageEpisodeSuccess = createSelector(
  selectPageEpisodeState,
  (state) => state.episodeData
);

export const getPageEpisodeError = createSelector(
  selectPageEpisodeState,
  (state) => state.error
);

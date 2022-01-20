import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReadEpisode from '../reducers/read-episode.reducer';

export const selectReadEpisodeState = createFeatureSelector<fromReadEpisode.EpisodeStateRead>(
  fromReadEpisode.readEpisodeFeatureKey
);
export const getReadEpisodeSuccess = createSelector(selectReadEpisodeState, (state) => state.episodeData);

export const getReadEpisodeError = createSelector(selectReadEpisodeState, (state) => state.error);
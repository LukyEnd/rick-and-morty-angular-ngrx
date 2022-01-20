import { ApiEpisodeModel } from './../../service/model/episode.model';
import { createAction, props } from '@ngrx/store';

export const loadPageEpisodes = createAction(
  '[PageEpisode] Load PageEpisodes',
  props<{ urlBase: string }>()
);

export const loadPageEpisodesSuccess = createAction(
  '[PageEpisode] Load PageEpisodes Success',
  props<{ episodeData: ApiEpisodeModel[] }>()
);

export const loadPageEpisodesFailure = createAction(
  '[PageEpisode] Load PageEpisodes Failure',
  props<{ error: string }>()
);

import { createAction, props } from '@ngrx/store';
import { ApiEpisodeModel } from 'src/app/service/model/episode.model';

export const loadReadEpisodes = createAction(
  '[ReadEpisode] Load ReadEpisodes',
  props<{ urlBase: string }>()
);

export const loadReadEpisodesSuccess = createAction(
  '[ReadEpisode] Load ReadEpisodes Success',
  props<{ episodeData: ApiEpisodeModel }>()
);

export const loadReadEpisodesFailure = createAction(
  '[ReadEpisode] Load ReadEpisodes Failure',
  props<{ error: string }>()
);

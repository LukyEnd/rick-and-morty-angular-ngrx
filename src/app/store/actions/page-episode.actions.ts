import { ApiEpisodeModel } from './../../service/model/episode.model';
import { createAction, props } from '@ngrx/store';

export const loadPageEpisodes = createAction('[PageEpisodes] Load PageEpisodes', props<{ urlBase: string }>());

export const loadPageEpisodesSuccess = createAction(
	'[PageEpisodes] Load PageEpisodes Success',
	props<{ episodeData: ApiEpisodeModel[] }>()
);

export const loadLoadingPage = createAction('[LoadingPage] Load Loading Page', props<{ loading: boolean }>());

export const loadPageEpisodesFailure = createAction(
	'[PageEpisodes] Load PageEpisodes Failure',
	props<{ error: string }>()
);

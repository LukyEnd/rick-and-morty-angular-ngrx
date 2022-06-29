import { Action, createReducer, on } from '@ngrx/store';
import { ApiEpisodeModel } from 'src/app/service/model/episode.model';
import * as PageEpisodeActions from '../actions/page-episode.actions';

export const pageEpisodeFeatureKey = 'pageEpisode';

export interface EpisodeState {
	episodeData: ApiEpisodeModel[];
	loading: boolean;
	error: string;
}

export const initialState: EpisodeState = {
	episodeData: [],
	loading: true,
	error: '',
};

export const episodeReducer = createReducer(
	initialState,

	on(PageEpisodeActions.loadPageEpisodesSuccess, (state, action): EpisodeState => {
		return {
			...state,
			episodeData: action.episodeData,
			error: '',
		};
	}),
	on(PageEpisodeActions.loadLoadingPage, (state, action) => {
		return {
			...state,
			loading: action.loading,
		};
	}),
	on(PageEpisodeActions.loadPageEpisodesFailure, (state, action): EpisodeState => {
		return {
			...state,
			episodeData: [],
			error: action.error,
		};
	})
);

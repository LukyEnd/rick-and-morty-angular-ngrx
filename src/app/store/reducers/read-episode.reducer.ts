import { createReducer, on } from '@ngrx/store';
import { ApiEpisodeModel } from 'src/app/service/model/episode.model';
import * as ReadEpisodeActions from '../actions/read-episode.actions';

export const readEpisodeFeatureKey = 'readEpisode';

export interface EpisodeStateRead {
	episodeData: ApiEpisodeModel | null;
	error: string;
}

export const initialState: EpisodeStateRead = {
	episodeData: null,
	error: '',
};

export const episodeReducer = createReducer(
	initialState,

	on(ReadEpisodeActions.loadReadEpisodesSuccess, (state, action): EpisodeStateRead => {
		return {
			...state,
			episodeData: action.episodeData,
			error: '',
		};
	}),
	on(ReadEpisodeActions.loadReadEpisodesFailure, (state, action): EpisodeStateRead => {
		return {
			...state,
			episodeData: null,
			error: action.error,
		};
	})
);

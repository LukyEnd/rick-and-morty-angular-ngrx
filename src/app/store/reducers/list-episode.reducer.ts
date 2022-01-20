import { createReducer, on } from '@ngrx/store';
import * as ListEpisodeActions from '../actions/list-episode.actions';

export const listEpisodeFeatureKey = 'listEpisode';

export interface ListEpisodeState {
	listEpisode: [];
}

export const initialState: ListEpisodeState = {
	listEpisode: [],
};

export const listEpisodeReducer = createReducer(
	initialState,

	on(ListEpisodeActions.loadListEpisodes, (state, action): ListEpisodeState => {
		return {
			...state,
			listEpisode: action.listEpisode,
		};
	})
);

import { createReducer, on } from '@ngrx/store';
import * as ListCharacterActions from '../actions/list-character.actions';

export const listCharacterFeatureKey = 'listCharacter';

export interface ListCharacterState {
	listCharacter: [];
}

export const initialState: ListCharacterState = {
	listCharacter: [],
};

export const listCharacterReducer = createReducer(
	initialState,

	on(ListCharacterActions.loadListCharacter, (state, action): ListCharacterState => {
		return {
			...state,
			listCharacter: action.listCharacter,
		};
	})
);

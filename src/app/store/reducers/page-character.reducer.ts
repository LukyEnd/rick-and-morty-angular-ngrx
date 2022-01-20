import { createReducer, on } from '@ngrx/store';
import { ApiCharacterModel } from 'src/app/service/model/character.model';
import * as PageCharacterActions from '../actions/page-character.actions';

export const pageCharacterFeatureKey = 'pageCharacter';

export interface CharacterState {
	charData: ApiCharacterModel[];
	error: string;
}

export const initialState: CharacterState = {
	charData: [],
	error: '',
};

export const characterReducer = createReducer(
	initialState,
	on(PageCharacterActions.loadPageCharactersSuccess, (state, action) => {
		return {
			...state,
			charData: action.charData,
			error: '',
		};
	}),
	on(PageCharacterActions.loadPageCharactersFailure, (state, action) => {
		return {
			...state,
			charData: [],
			error: action.error,
		};
	})
);

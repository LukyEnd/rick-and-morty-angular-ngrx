import { createReducer, on } from '@ngrx/store';
import { ApiCharacterModel } from 'src/app/service/model/character.model';
import * as PageCharacterActions from '../actions/page-character.actions';

export const pageCharacterFeatureKey = 'pageCharacter';

export interface CharacterState {
	charData: ApiCharacterModel[];
	loading: boolean;
	error: string;
}

export const initialState: CharacterState = {
	charData: [],
	loading: true,
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
	on(PageCharacterActions.loadLoadingPage, (state, action) => {
		return {
			...state,
			loading: action.loading,
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

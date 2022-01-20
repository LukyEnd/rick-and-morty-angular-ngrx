import { createReducer, on } from '@ngrx/store';
import * as ReadCharacterActions from '../actions/read-character.actions';
import { ApiCharacterModel } from './../../service/model/character.model';

export const readCharacterFeatureKey = 'readCharacter';

export interface CharacterStateRead {
	charDataSingle: ApiCharacterModel | null;
	error: string;
}

export const initialState: CharacterStateRead = {
	charDataSingle: null,
	error: '',
};

export const characterReducer = createReducer(
	initialState,

	on(ReadCharacterActions.loadReadCharactersSuccess, (state, action): CharacterStateRead => {
		return {
			...state,
			charDataSingle: action.charDataSingle,
			error: '',
		};
	}),
	on(ReadCharacterActions.loadReadCharactersFailure, (state, action): CharacterStateRead => {
		return {
			...state,
			charDataSingle: null,
			error: action.error,
		};
	})
);

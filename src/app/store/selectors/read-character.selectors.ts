import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReadCharacter from '../reducers/read-character.reducer';

export const selectReadCharacterState = createFeatureSelector<fromReadCharacter.CharacterStateRead>(
	fromReadCharacter.readCharacterFeatureKey
);
export const getReadCharacterSuccess = createSelector(selectReadCharacterState, (state) => state.charDataSingle);

export const getReadCharacterError = createSelector(selectReadCharacterState, (state) => state.error);

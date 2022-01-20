import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPageCharacter from '../reducers/page-character.reducer';

export const selectPageCharacterState = createFeatureSelector<fromPageCharacter.CharacterState>(
  fromPageCharacter.pageCharacterFeatureKey
);

export const getPageCharacterSuccess = createSelector(
  selectPageCharacterState,
  (state) => state.charData
);

export const getPageCharacterError = createSelector(
  selectPageCharacterState,
  (state) => state.error
);

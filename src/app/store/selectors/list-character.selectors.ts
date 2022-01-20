import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromListCharacter from '../reducers/list-character.reducer';

export const selectListCharacterState = createFeatureSelector<fromListCharacter.ListCharacterState>(
  fromListCharacter.listCharacterFeatureKey
);
export const getListCharacter = createSelector(
  selectListCharacterState,
  (state) => state.listCharacter
);
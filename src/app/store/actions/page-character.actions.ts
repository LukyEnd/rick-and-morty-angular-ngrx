import { ApiCharacterModel } from 'src/app/service/model/character.model';
import { createAction, props } from '@ngrx/store';

export const loadPageCharacters = createAction(
  '[PageCharacter] Load PageCharacters',
  props<{ urlBase: string}>()
);

export const loadPageCharactersSuccess = createAction(
  '[PageCharacter] Load PageCharacters Success',
  props<{ charData: ApiCharacterModel[] }>()
);

export const loadPageCharactersFailure = createAction(
  '[PageCharacter] Load PageCharacters Failure',
  props<{ error: string }>()
);

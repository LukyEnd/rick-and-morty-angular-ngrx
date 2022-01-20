import { ApiCharacterModel } from './../../service/model/character.model';
import { createAction, props } from '@ngrx/store';

export const loadReadCharacters = createAction(
  '[ReadCharacter] Load ReadCharacters',
  props<{ urlBase: string }>()
);

export const loadReadCharactersSuccess = createAction(
  '[ReadCharacter] Load ReadCharacters Success',
  props<{ charDataSingle: ApiCharacterModel }>()
);

export const loadReadCharactersFailure = createAction(
  '[ReadCharacter] Load ReadCharacters Failure',
  props<{ error: string }>()
);

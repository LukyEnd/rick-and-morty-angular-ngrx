import { createAction, props } from '@ngrx/store';

export const loadListCharacter = createAction(
  '[ListCharacter] Load ListCharacter',
  props<{ listCharacter: [] }>()
);


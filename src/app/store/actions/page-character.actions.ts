import { ApiCharacterModel } from 'src/app/service/model/character.model';
import { createAction, props } from '@ngrx/store';

export const loadPageCharacters = createAction('[PageCharacters] Load PageCharacters', props<{ urlBase: string }>());

export const loadPageCharactersSuccess = createAction(
	'[PageCharacters] Load PageCharacters Success',
	props<{ charData: ApiCharacterModel[] }>()
);

export const loadLoadingPage = createAction('[LoadingPage] Load Loading Page', props<{ loading: boolean }>());

export const loadPageCharactersFailure = createAction(
	'[PageCharacters] Load PageCharacters Failure',
	props<{ error: string }>()
);

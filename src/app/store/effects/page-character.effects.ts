import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import * as PageCharacterActions from '../actions/page-character.actions';

@Injectable()
export class PageCharacterEffects {
	constructor(private actions$: Actions, private serv: ServiceCharacterService) {}

	loadPageCharacters$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(PageCharacterActions.loadPageCharacters),
			mergeMap((data) =>
				this.serv.apiCharacterData(data.urlBase).pipe(
					map((charData) => {
						PageCharacterActions.loadLoadingPage({ loading: true });
						return PageCharacterActions.loadPageCharactersSuccess({ charData: charData });
					})
				)
			)
		);
	});
}

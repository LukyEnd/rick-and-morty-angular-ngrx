import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import * as ReadCharacterActions from '../actions/read-character.actions';

@Injectable()
export class ReadCharacterEffects {
	constructor(private actions$: Actions, private serv: ServiceCharacterService) {}

	loadReadCharacters$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(ReadCharacterActions.loadReadCharacters),
			mergeMap((data) =>
				this.serv.charIndividually(data.urlBase).pipe(
					map((charSingle) => {
						return ReadCharacterActions.loadReadCharactersSuccess({ charDataSingle: charSingle });
					})
				)
			)
		);
	});
}

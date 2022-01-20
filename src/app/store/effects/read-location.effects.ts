import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ServiceLocationService } from 'src/app/service/service-location.service';
import * as ReadLocationActions from '../actions/read-location.actions';

@Injectable()
export class ReadLocationEffects {
	constructor(private actions$: Actions, private serv: ServiceLocationService) {}

	loadReadLocations$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(ReadLocationActions.loadReadLocations),
			mergeMap((data) =>
				this.serv.locationIndividually(data.urlBase).pipe(
					map((locationDate) => {
						return ReadLocationActions.loadReadLocationsSuccess({ locationDataSingle: locationDate });
					})
				)
			)
		);
	});
}

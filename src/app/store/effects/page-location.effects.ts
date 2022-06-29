import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import * as PageLocationActions from '../actions/page-location.actions';
import { ServiceLocationService } from './../../service/service-location.service';

@Injectable()
export class PageLocationEffects {
	constructor(private actions$: Actions, private serv: ServiceLocationService) {}

	loadPageLocations$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(PageLocationActions.loadPageLocations),
			mergeMap((data) =>
				this.serv.apiLocationData(data.urlBase).pipe(
					map((locationData) => {
						PageLocationActions.loadLoadingPage({ loading: true });
						return PageLocationActions.loadPageLocationsSuccess({ locationData: locationData });
					})
				)
			)
		);
	});
}

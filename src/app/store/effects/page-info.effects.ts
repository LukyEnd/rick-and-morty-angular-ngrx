import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as PageInfoActions from '../actions/page-info.actions';
import { ServicePageInfoService } from 'src/app/service/service-page-info.service';
import { Store } from '@ngrx/store';

@Injectable()
export class PageInfoEffects {
	constructor(private actions$: Actions, private serv: ServicePageInfoService, private store: Store) {}

	loadPageInfos$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(PageInfoActions.loadPageInfos),
			mergeMap((data) =>
				this.serv.apiPageInfo(data.urlBase).pipe(
					map((pageinfo) => {
						if (pageinfo != null) {
							return PageInfoActions.loadPageInfosSuccess({ infoUrl: pageinfo });
						} else {
							return PageInfoActions.loadPageInfosFailure({ error: 'Seila o que vai aqui' });
						}
					})
				)
			)
		);
	});
}

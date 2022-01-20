import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ServiceEpisodeService } from 'src/app/service/service-episode.service';
import * as PageEpisodeActions from '../actions/page-episode.actions';
import { ApiEpisodeModel } from './../../service/model/episode.model';

@Injectable()
export class PageEpisodeEffects {
	constructor(private actions$: Actions, private serv: ServiceEpisodeService) {}

	loadPageEpisodes$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(PageEpisodeActions.loadPageEpisodes),
			mergeMap((data) =>
				this.serv.apiEpisodeData(data.urlBase).pipe(
					map((episodeData: ApiEpisodeModel[]) => {
						return PageEpisodeActions.loadPageEpisodesSuccess({ episodeData: episodeData });
					})
				)
			)
		);
	});
}

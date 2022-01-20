import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ServiceEpisodeService } from 'src/app/service/service-episode.service';
import * as ReadEpisodeActions from '../actions/read-episode.actions';

@Injectable()
export class ReadEpisodeEffects {
	constructor(private actions$: Actions, private serv: ServiceEpisodeService) {}
	loadReadEpisodes$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(ReadEpisodeActions.loadReadEpisodes),
			mergeMap((data) =>
				this.serv.episodeIndividually(data.urlBase).pipe(
					map((episodeData) => {
						return ReadEpisodeActions.loadReadEpisodesSuccess({ episodeData: episodeData });
					})
				)
			)
		);
	});
}

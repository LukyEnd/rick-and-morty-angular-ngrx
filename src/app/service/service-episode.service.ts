import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ApiEpisodeModel } from './model/episode.model';

@Injectable({
	providedIn: 'root',
})
export class ServiceEpisodeService {
	constructor(private http: HttpClient) {}

	apiEpisodeData(urlEpisode: string): Observable<ApiEpisodeModel[]> {
		return this.http.get(urlEpisode).pipe(pluck('results'));
	}

	episodeIndividually(urlEpisode: string): Observable<ApiEpisodeModel> {
		return this.http.get<ApiEpisodeModel>(urlEpisode);
	}
}

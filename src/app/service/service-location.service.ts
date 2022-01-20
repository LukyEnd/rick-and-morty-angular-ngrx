import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ApiLocationModel } from './model/location.model';

@Injectable({
	providedIn: 'root',
})
export class ServiceLocationService {
	constructor(private http: HttpClient) {}

	apiLocationData(urlLocation: string): Observable<ApiLocationModel[]> {
		return this.http.get(urlLocation).pipe(pluck('results'));
	}

	locationIndividually(urlLocation: string): Observable<ApiLocationModel> {
		return this.http.get<ApiLocationModel>(urlLocation);
	}
}

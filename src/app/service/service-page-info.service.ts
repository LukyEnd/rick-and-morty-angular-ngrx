import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ApiPageModel } from './model/page.module';

@Injectable({
	providedIn: 'root',
})
export class ServicePageInfoService {
	constructor(private http: HttpClient) {}

	apiPageInfo(urlPage: string): Observable<ApiPageModel> {
		return this.http.get(urlPage).pipe(pluck('info'));
	}
}

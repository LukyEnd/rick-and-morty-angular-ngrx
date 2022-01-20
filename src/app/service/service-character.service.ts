import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ApiCharacterModel } from './model/character.model';

@Injectable({
	providedIn: 'root',
})
export class ServiceCharacterService {
	constructor(private http: HttpClient) {}

	apiCharacterData(urlCharacter: string): Observable<ApiCharacterModel[]> {
		return this.http.get(urlCharacter).pipe(pluck('results'));
	}

	charIndividually(urlCharacter: string): Observable<ApiCharacterModel> {
		return this.http.get<ApiCharacterModel>(urlCharacter);
	}
}

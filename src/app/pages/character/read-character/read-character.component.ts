import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as ListEpisodeAction from '../../../store/actions/list-episode.actions';
import * as LocationReadAction from '../../../store/actions/read-location.actions';
import { ListEpisodeComponent } from '../../episode/list-episode/list-episode.component';
import { ReadLocationComponent } from '../../location/read-location/read-location.component';
import { ApiCharacterModel } from './../../../service/model/character.model';
import { getReadCharacterError, getReadCharacterSuccess } from './../../../store/selectors/read-character.selectors';

@Component({
	selector: 'app-read-character',
	templateUrl: './read-character.component.html',
	styleUrls: ['./read-character.component.scss', '../../base/base.component.scss'],
})
export class ReadCharacterComponent implements OnInit {
	charData$!: Observable<ApiCharacterModel | null>;
	charData!: ApiCharacterModel | null;

	charDataError$!: Observable<string>;
	charDataError!: string;

	subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store) {
		this.charData$ = this.store.select(getReadCharacterSuccess);
		this.charDataError$ = this.store.select(getReadCharacterError);
	}
	ngOnInit(): void {
		this.actionPage();
	}
	actionPage() {
		this.subscription.push(
			this.charData$.subscribe((data) => {
				this.charData = data;
			})
		);
		this.subscription.push(
			this.charDataError$.subscribe((error) => {
				this.charDataError = error;
			})
		);
	}
	openDialog(locationUrl: string) {
		this.store.dispatch(LocationReadAction.loadReadLocations({ urlBase: locationUrl }));
		this.dialog.open(ReadLocationComponent);
	}

	openList(listEpisode: []) {
		this.store.dispatch(ListEpisodeAction.loadListEpisodes({ listEpisode: listEpisode }));
		this.dialog.open(ListEpisodeComponent);
	}
}

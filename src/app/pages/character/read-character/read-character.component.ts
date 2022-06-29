import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/state/app.state';
import { ApiCharacterModel } from '../../../service/model/character.model';
import * as ListEpisodeAction from '../../../store/actions/list-episode.actions';
import * as LocationReadAction from '../../../store/actions/read-location.actions';
import { getReadCharacterError, getReadCharacterSuccess } from '../../../store/selectors/read-character.selectors';
import { ListEpisodeComponent } from '../../episode/list-episode/list-episode.component';
import { ReadLocationComponent } from '../../location/read-location/read-location.component';

@Component({
	selector: 'app-read-character',
	templateUrl: './read-character.component.html',
	styleUrls: ['./read-character.component.scss', '../../base/base.component.scss'],
})
export class ReadCharacterComponent implements OnInit {
	public charData$!: Observable<ApiCharacterModel | null>;
	public charData!: ApiCharacterModel | null;
	public charDataError$!: Observable<string>;
	public charDataError!: string;

	public subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store<AppState>) {
		this.charData$ = this.store.select(getReadCharacterSuccess);
		this.charDataError$ = this.store.select(getReadCharacterError);
	}

	public ngOnInit(): void {
		this.actionPage();
	}

	public actionPage(): void {
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

	public openDialog(locationUrl: string): void {
		this.store.dispatch(LocationReadAction.loadReadLocations({ urlBase: locationUrl }));
		this.dialog.open(ReadLocationComponent);
	}

	public openList(listEpisode: []): void {
		this.store.dispatch(ListEpisodeAction.loadListEpisodes({ listEpisode: listEpisode }));
		this.dialog.open(ListEpisodeComponent);
	}
}

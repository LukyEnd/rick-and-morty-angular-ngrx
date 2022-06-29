import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getReadEpisodeError, getReadEpisodeSuccess } from 'src/app/store/selectors/read-episode.selectors';
import { AppState } from 'src/app/store/state/app.state';
import * as CharReadAction from '../../../store/actions/read-character.actions';
import { ReadCharacterComponent } from '../../character/read-character/read-character.component';
import { ApiEpisodeModel } from './../../../service/model/episode.model';

@Component({
	selector: 'app-read-episode',
	templateUrl: './read-episode.component.html',
	styleUrls: ['./read-episode.component.scss', '../../base/base.component.scss'],
})
export class ReadEpisodeComponent implements OnInit {
	public episodeData$!: Observable<ApiEpisodeModel | null>;
	public episodeData!: ApiEpisodeModel | null;
	public episodeDataErro$!: Observable<string>;
	public episodeDataErro!: string;

	public substring: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store<AppState>) {
		this.episodeData$ = this.store.select(getReadEpisodeSuccess);
		this.episodeDataErro$ = this.store.select(getReadEpisodeError);
	}

	public ngOnInit(): void {
		this.dataPage();
	}

	public dataPage(): void {
		this.substring.push(
			this.episodeData$.subscribe((data) => {
				this.episodeData = data;
			})
		);
		this.substring.push(
			this.episodeDataErro$.subscribe((erro) => {
				this.episodeDataErro = erro;
			})
		);
	}

	public openDialog(characterUrl: string): void {
		this.store.dispatch(CharReadAction.loadReadCharacters({ urlBase: characterUrl }));
		this.dialog.open(ReadCharacterComponent);
	}
}

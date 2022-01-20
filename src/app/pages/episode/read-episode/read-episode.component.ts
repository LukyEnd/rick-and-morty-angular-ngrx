import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getReadEpisodeError, getReadEpisodeSuccess } from 'src/app/store/selectors/read-episode.selectors';
import * as CharReadAction from '../../../store/actions/read-character.actions';
import { ReadCharacterComponent } from '../../character/read-character/read-character.component';
import { ApiEpisodeModel } from './../../../service/model/episode.model';

@Component({
	selector: 'app-read-episode',
	templateUrl: './read-episode.component.html',
	styleUrls: ['./read-episode.component.scss', '../../base/base.component.scss'],
})
export class ReadEpisodeComponent implements OnInit {
	episodeData$!: Observable<ApiEpisodeModel | null>;
	episodeData!: ApiEpisodeModel | null;

	episodeDataErro$!: Observable<string>;
	episodeDataErro!: string;

	substring: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store) {
		this.episodeData$ = this.store.select(getReadEpisodeSuccess);
		this.episodeDataErro$ = this.store.select(getReadEpisodeError);
	}

	ngOnInit(): void {
		this.dataPage();
	}

	dataPage() {
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

	openDialog(characterUrl: string) {
		this.store.dispatch(CharReadAction.loadReadCharacters({ urlBase: characterUrl }));
		this.dialog.open(ReadCharacterComponent);
	}
}

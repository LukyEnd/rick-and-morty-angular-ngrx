import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getListEpisode } from 'src/app/store/selectors/list-episode.selectors';
import { AppState } from 'src/app/store/state/app.state';
import * as EpisodeDataAction from '../../../store/actions/read-episode.actions';
import { ReadEpisodeComponent } from '../read-episode/read-episode.component';

@Component({
	selector: 'app-list-episode',
	templateUrl: './list-episode.component.html',
	styleUrls: ['./list-episode.component.scss', '../../base/base.component.scss'],
})
export class ListEpisodeComponent implements OnInit {
	public episodeList$!: Observable<[]>;
	public episodeList!: [];
	public subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store<AppState>) {
		this.episodeList$ = this.store.select(getListEpisode);
	}

	public ngOnInit(): void {
		this.dataPage();
	}

	public dataPage(): void {
		this.subscription.push(
			this.episodeList$.subscribe((data) => {
				this.episodeList = data;
			})
		);
	}

	public openDialog(episodeUrl: string): void {
		this.store.dispatch(EpisodeDataAction.loadReadEpisodes({ urlBase: episodeUrl }));
		this.dialog.open(ReadEpisodeComponent);
	}
}

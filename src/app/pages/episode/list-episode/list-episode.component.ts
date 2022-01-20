import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getListEpisode } from 'src/app/store/selectors/list-episode.selectors';
import * as EpisodeDataAction from '../../../store/actions/read-episode.actions';
import { ReadEpisodeComponent } from '../read-episode/read-episode.component';

@Component({
	selector: 'app-list-episode',
	templateUrl: './list-episode.component.html',
	styleUrls: ['./list-episode.component.scss', '../../base/base.component.scss'],
})
export class ListEpisodeComponent implements OnInit {
	episodeList$!: Observable<[]>;
	episodeList!: [];
	subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store) {
		this.episodeList$ = this.store.select(getListEpisode);
	}

	ngOnInit(): void {
		this.dataPage();
	}

	dataPage() {
		this.subscription.push(
			this.episodeList$.subscribe((data) => {
				this.episodeList = data;
			})
		);
	}

	openDialog(episodeUrl: string) {
		this.store.dispatch(EpisodeDataAction.loadReadEpisodes({ urlBase: episodeUrl }));
		this.dialog.open(ReadEpisodeComponent);
	}
}

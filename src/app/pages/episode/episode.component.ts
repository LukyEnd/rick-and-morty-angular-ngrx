import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getPageEpisodeError, getPageEpisodeSuccess } from 'src/app/store/selectors/page-episode.selectors';
import { getPageInfoError, getPageInfoSuccess } from 'src/app/store/selectors/page-info.selectors';
import { environment } from 'src/environments/environment.prod';
import { ApiEpisodeModel } from '../../service/model/episode.model';
import * as ListCharacterAction from '../../store/actions/list-character.actions';
import * as EpisodeLocationAction from '../../store/actions/page-episode.actions';
import * as InfoPageAction from '../../store/actions/page-info.actions';
import { ListCharacterComponent } from '../character/list-character/list-character.component';
import { ApiPageModel } from './../../service/model/page.module';

@Component({
	selector: 'app-episode',
	templateUrl: './episode.component.html',
	styleUrls: ['./episode.component.scss', '../base/base.component.scss'],
})
export class EpisodeComponent implements OnInit {
	infoPage$!: Observable<ApiPageModel | null>;
	infoPage!: ApiPageModel | null;
	infoPageErro$!: Observable<string>;
	infoPageErro!: string;

	episodeData$!: Observable<ApiEpisodeModel[] | null>;
	episodeData!: ApiEpisodeModel[] | null;
	episodeDataErro$!: Observable<string>;
	episodeDataErro!: string;

	subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store) {
		this.episodeData$ = this.store.select(getPageEpisodeSuccess);
		this.episodeDataErro$ = this.store.select(getPageEpisodeError);
		this.infoPage$ = this.store.select(getPageInfoSuccess);
		this.infoPageErro$ = this.store.select(getPageInfoError);
	}

	ngOnInit(): void {
		this.actionPageInitial();
		this.dataPage();
	}

	actionPageInitial() {
		this.store.dispatch(InfoPageAction.loadPageInfos({ urlBase: `${environment.url}episode` }));
		this.store.dispatch(EpisodeLocationAction.loadPageEpisodes({ urlBase: `${environment.url}episode` }));
	}
	dataPage() {
		this.subscription.push(
			this.infoPage$.subscribe((data) => {
				this.infoPage = data;
			})
		);
		this.subscription.push(
			this.infoPageErro$.subscribe((erro) => {
				this.infoPageErro = erro;
			})
		);
		this.subscription.push(
			this.episodeData$.subscribe((data) => {
				this.episodeData = data;
			})
		);
		this.subscription.push(
			this.episodeDataErro$.subscribe((erro) => {
				this.episodeDataErro = erro;
			})
		);
	}

	buttonNextPage() {
		if (this.infoPage?.next != null) {
			this.store.dispatch(InfoPageAction.loadPageInfos({ urlBase: this.infoPage.next }));
			this.store.dispatch(EpisodeLocationAction.loadPageEpisodes({ urlBase: this.infoPage.next }));
		}
	}

	buttonPrevPage() {
		if (this.infoPage?.prev != null) {
			this.store.dispatch(InfoPageAction.loadPageInfos({ urlBase: this.infoPage.prev }));
			this.store.dispatch(EpisodeLocationAction.loadPageEpisodes({ urlBase: this.infoPage.prev }));
		}
	}

	openList(charList: []) {
		this.store.dispatch(ListCharacterAction.loadListCharacter({ listCharacter: charList }));
		this.dialog.open(ListCharacterComponent);
	}
}

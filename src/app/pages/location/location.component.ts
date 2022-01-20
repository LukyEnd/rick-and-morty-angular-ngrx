import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getPageLocationError, getPageLocationSuccess } from 'src/app/store/selectors/page-location.selectors';
import { environment } from 'src/environments/environment.prod';
import { ApiLocationModel } from '../../service/model/location.model';
import * as ListCharacterAction from '../../store/actions/list-character.actions';
import * as PageInfoAction from '../../store/actions/page-info.actions';
import * as DataPageAction from '../../store/actions/page-location.actions';
import { ListCharacterComponent } from '../character/list-character/list-character.component';
import { ApiPageModel } from './../../service/model/page.module';
import { getPageInfoError, getPageInfoSuccess } from './../../store/selectors/page-info.selectors';

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss', '../base/base.component.scss'],
})
export class LocationComponent implements OnInit {
	locationData$!: Observable<ApiLocationModel[]>;
	locationData!: ApiLocationModel[];
	locationDataErro$!: Observable<string>;
	locationDataErro!: string;

	infoPage$!: Observable<ApiPageModel | null>;
	infoPage!: ApiPageModel | null;
	infoPageErro$!: Observable<string>;
	infoPageErro!: string;

	subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store) {
		this.infoPage$ = this.store.select(getPageInfoSuccess);
		this.infoPageErro$ = this.store.select(getPageInfoError);
		this.locationData$ = this.store.select(getPageLocationSuccess);
		this.locationDataErro$ = this.store.select(getPageLocationError);
	}

	ngOnInit(): void {
		this.actionLocation();
		this.dataPageLocation();
	}

	actionLocation() {
		this.store.dispatch(DataPageAction.loadPageLocations({ urlBase: `${environment.url}location` }));
		this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: `${environment.url}location` }));
	}

	dataPageLocation() {
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
			this.locationData$.subscribe((data) => {
				this.locationData = data;
			})
		);
		this.subscription.push(
			this.locationDataErro$.subscribe((erro) => {
				this.locationDataErro = erro;
			})
		);
	}

	buttonNextLocation() {
		if (this.infoPage?.next != null) {
			this.store.dispatch(DataPageAction.loadPageLocations({ urlBase: this.infoPage.next }));
			this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: this.infoPage.next }));
		}
	}

	buttonPrevLocation() {
		if (this.infoPage?.prev != null) {
			this.store.dispatch(DataPageAction.loadPageLocations({ urlBase: this.infoPage.prev }));
			this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: this.infoPage.prev }));
		}
	}

	openList(charList: []) {
		this.store.dispatch(ListCharacterAction.loadListCharacter({ listCharacter: charList }));
		this.dialog.open(ListCharacterComponent);
	}
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getPageLocationError, getPageLocationSuccess } from 'src/app/store/selectors/page-location.selectors';
import { AppState } from 'src/app/store/state/app.state';
import { environment } from 'src/environments/environment.prod';
import { ApiLocationModel } from '../../service/model/location.model';
import * as ListCharacterAction from '../../store/actions/list-character.actions';
import * as PageInfoAction from '../../store/actions/page-info.actions';
import * as DataPageAction from '../../store/actions/page-location.actions';
import { ListCharacterComponent } from '../character/list-character/list-character.component';
import { ApiPageModel } from './../../service/model/page.module';
import { getPageLoading } from './../../store/selectors/page-character.selectors';
import { getPageInfoError, getPageInfoSuccess } from './../../store/selectors/page-info.selectors';

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss', '../base/base.component.scss'],
})
export class LocationComponent implements OnInit {
	public locationData$!: Observable<ApiLocationModel[]>;
	public locationData!: ApiLocationModel[];
	public locationDataErro$!: Observable<string>;
	public locationDataErro!: string;
	public infoPage$!: Observable<ApiPageModel | null>;
	public infoPage!: ApiPageModel | null;
	public infoPageErro$!: Observable<string>;
	public infoPageErro!: string;
	public isLoading$!: Observable<boolean>;
	public isLoading: boolean = false;

	public subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store<AppState>) {
		this.infoPage$ = this.store.select(getPageInfoSuccess);
		this.infoPageErro$ = this.store.select(getPageInfoError);
		this.locationData$ = this.store.select(getPageLocationSuccess);
		this.isLoading$ = this.store.select(getPageLoading);
		this.locationDataErro$ = this.store.select(getPageLocationError);
	}

	public ngOnInit(): void {
		this.actionLocation();
		this.dataPageLocation();
	}

	public actionLocation(): void {
		this.store.dispatch(DataPageAction.loadPageLocations({ urlBase: `${environment.url}location` }));
		this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: `${environment.url}location` }));
	}

	public dataPageLocation(): void {
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
		this.subscription.push(
			this.isLoading$.subscribe((pageLoading) => {
				this.isLoading = pageLoading;
			})
		);
	}

	public buttonNextLocation(): void {
		if (this.infoPage?.next != null) {
			this.store.dispatch(DataPageAction.loadPageLocations({ urlBase: this.infoPage.next }));
			this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: this.infoPage.next }));
		}
	}

	public buttonPrevLocation(): void {
		if (this.infoPage?.prev != null) {
			this.store.dispatch(DataPageAction.loadPageLocations({ urlBase: this.infoPage.prev }));
			this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: this.infoPage.prev }));
		}
	}

	public openList(charList: []): void {
		this.store.dispatch(ListCharacterAction.loadListCharacter({ listCharacter: charList }));
		this.dialog.open(ListCharacterComponent);
	}
}

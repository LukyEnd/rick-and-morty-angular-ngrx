import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getPageCharacterError, getPageCharacterSuccess } from 'src/app/store/selectors/page-character.selectors';
import { getPageInfoError, getPageInfoSuccess } from 'src/app/store/selectors/page-info.selectors';
import { AppState } from 'src/app/store/state/app.state';
import { environment } from 'src/environments/environment.prod';
import * as CharacterInfoAction from '../../store/actions/page-character.actions';
import * as PageInfoAction from '../../store/actions/page-info.actions';
import * as CharReadAction from '../../store/actions/read-character.actions';
import { ApiCharacterModel } from './../../service/model/character.model';
import { ApiPageModel } from './../../service/model/page.module';
import { getPageLoading } from './../../store/selectors/page-character.selectors';
import { ReadCharacterComponent } from './read-character/read-character.component';

@Component({
	selector: 'app-character',
	templateUrl: './character.component.html',
	styleUrls: ['./character.component.scss', '../base/base.component.scss'],
})
export class CharacterComponent implements OnInit {
	public pageInfo$!: Observable<ApiPageModel | null>;
	public pageInfo!: ApiPageModel | null;
	public pageInfoErro$!: Observable<string>;
	public pageInfoErro!: string;
	public characterData$!: Observable<ApiCharacterModel[]>;
	public chararterData!: ApiCharacterModel[];
	public characterDataErro$!: Observable<string>;
	public characterDataErro!: string;
	public isLoading$!: Observable<boolean>;
	public isLoading: boolean = false;

	public subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store<AppState>) {
		this.characterData$ = this.store.select(getPageCharacterSuccess);
		this.characterDataErro$ = this.store.select(getPageCharacterError);
		this.pageInfo$ = this.store.select(getPageInfoSuccess);
		this.pageInfoErro$ = this.store.select(getPageInfoError);
		this.isLoading$ = this.store.select(getPageLoading);
		this.dataPage();
	}

	public ngOnInit(): void {
		this.actionPageInitial();
	}

	public actionPageInitial(): void {
		this.store.dispatch(CharacterInfoAction.loadPageCharacters({ urlBase: `${environment.url}character` }));
		this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: `${environment.url}character` }));
	}

	public dataPage(): void {
		this.subscription.push(
			this.characterData$.subscribe((data) => {
				this.chararterData = data;
			})
		);
		this.subscription.push(
			this.characterDataErro$.subscribe((error) => {
				this.characterDataErro = error;
			})
		);
		this.subscription.push(
			this.pageInfo$.subscribe((data) => {
				this.pageInfo = data;
			})
		);
		this.subscription.push(
			this.pageInfoErro$.subscribe((error) => {
				this.pageInfoErro = error;
			})
		);
		this.subscription.push(
			this.isLoading$.subscribe((statusLoading) => {
				this.isLoading = statusLoading;
			})
		);
	}

	public buttonNext(): void {
		if (this.pageInfo?.next != null) {
			this.store.dispatch(CharacterInfoAction.loadPageCharacters({ urlBase: this.pageInfo.next }));
			this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: this.pageInfo.next }));
		}
	}

	public buttonPrev(): void {
		if (this.pageInfo?.prev != null) {
			this.store.dispatch(CharacterInfoAction.loadPageCharacters({ urlBase: this.pageInfo.prev }));
			this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: this.pageInfo.prev }));
		}
	}

	public openDialog(characterUrl: string): void {
		this.store.dispatch(CharReadAction.loadReadCharacters({ urlBase: characterUrl }));
		this.dialog.open(ReadCharacterComponent);
	}
}

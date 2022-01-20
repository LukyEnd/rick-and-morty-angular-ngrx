import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getPageCharacterError, getPageCharacterSuccess } from 'src/app/store/selectors/page-character.selectors';
import { getPageInfoError, getPageInfoSuccess } from 'src/app/store/selectors/page-info.selectors';
import { environment } from 'src/environments/environment.prod';
import * as CharacterInfoAction from '../../store/actions/page-character.actions';
import * as PageInfoAction from '../../store/actions/page-info.actions';
import * as CharReadAction from '../../store/actions/read-character.actions';
import { ApiCharacterModel } from './../../service/model/character.model';
import { ApiPageModel } from './../../service/model/page.module';
import { ReadCharacterComponent } from './read-character/read-character.component';

@Component({
	selector: 'app-character',
	templateUrl: './character.component.html',
	styleUrls: ['./character.component.scss', '../base/base.component.scss'],
})
export class CharacterComponent implements OnInit {
	pageInfo$!: Observable<ApiPageModel | null>;
	pageInfo!: ApiPageModel | null;
	pageInfoErro$!: Observable<string>;
	pageInfoErro!: string;

	characterData$!: Observable<ApiCharacterModel[]>;
	chararterData!: ApiCharacterModel[];
	characterDataErro$!: Observable<string>;
	characterDataErro!: string;

	subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store) {
		this.characterData$ = this.store.select(getPageCharacterSuccess);
		this.characterDataErro$ = this.store.select(getPageCharacterError);
		this.pageInfo$ = this.store.select(getPageInfoSuccess);
		this.pageInfoErro$ = this.store.select(getPageInfoError);
	}

	ngOnInit(): void {
		this.actionPageInitial();
		this.dataPage();
	}

	actionPageInitial() {
		this.store.dispatch(CharacterInfoAction.loadPageCharacters({ urlBase: `${environment.url}character` }));
		this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: `${environment.url}character` }));
	}

	dataPage() {
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
	}

	buttonNext() {
		if (this.pageInfo?.next != null) {
			this.store.dispatch(CharacterInfoAction.loadPageCharacters({ urlBase: this.pageInfo.next }));
			this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: this.pageInfo.next }));
		}
	}

	buttonPrev() {
		if (this.pageInfo?.prev != null) {
			this.store.dispatch(CharacterInfoAction.loadPageCharacters({ urlBase: this.pageInfo.prev }));
			this.store.dispatch(PageInfoAction.loadPageInfos({ urlBase: this.pageInfo.prev }));
		}
	}

	openDialog(characterUrl: string) {
		this.store.dispatch(CharReadAction.loadReadCharacters({ urlBase: characterUrl }));
		this.dialog.open(ReadCharacterComponent);
	}
}

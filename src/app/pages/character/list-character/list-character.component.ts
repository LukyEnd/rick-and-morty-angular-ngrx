import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getListCharacter } from 'src/app/store/selectors/list-character.selectors';
import { AppState } from 'src/app/store/state/app.state';
import * as CharReadAction from '../../../store/actions/read-character.actions';
import { ReadCharacterComponent } from '../read-character/read-character.component';

@Component({
	selector: 'app-list-character',
	templateUrl: './list-character.component.html',
	styleUrls: ['./list-character.component.scss', '../../base/base.component.scss'],
})
export class ListCharacterComponent implements OnInit {
	public characterList$!: Observable<[]>;
	public characterList!: [];
	public subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store<AppState>) {
		this.characterList$ = this.store.select(getListCharacter);
	}

	public ngOnInit(): void {
		this.listPage();
	}

	public listPage(): void {
		this.subscription.push(
			this.characterList$.subscribe((data) => {
				this.characterList = data;
			})
		);
	}

	public openDialog(characterUrl: string): void {
		this.store.dispatch(CharReadAction.loadReadCharacters({ urlBase: characterUrl }));
		this.dialog.open(ReadCharacterComponent);
	}
}

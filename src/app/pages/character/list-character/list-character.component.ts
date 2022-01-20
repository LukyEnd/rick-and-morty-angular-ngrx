import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getListCharacter } from 'src/app/store/selectors/list-character.selectors';
import * as CharReadAction from '../../../store/actions/read-character.actions';
import { ReadCharacterComponent } from '../read-character/read-character.component';

@Component({
	selector: 'app-list-character',
	templateUrl: './list-character.component.html',
	styleUrls: ['./list-character.component.scss', '../../base/base.component.scss'],
})
export class ListCharacterComponent implements OnInit {
	characterList$!: Observable<[]>;
	characterList!: [];
	subscription: Subscription[] = [];

	constructor(private dialog: MatDialog, private store: Store) {
		this.characterList$ = this.store.select(getListCharacter);
	}

	ngOnInit(): void {
		this.listPage();
	}

	listPage() {
		this.subscription.push(
			this.characterList$.subscribe((data) => {
				this.characterList = data;
			})
		);
	}

	openDialog(characterUrl: string) {
		this.store.dispatch(CharReadAction.loadReadCharacters({ urlBase: characterUrl }));
		this.dialog.open(ReadCharacterComponent);
	}
}

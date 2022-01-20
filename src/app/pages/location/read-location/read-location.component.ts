import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ApiLocationModel } from 'src/app/service/model/location.model';
import { getReadLocationError, getReadLocationSuccess } from 'src/app/store/selectors/read-location.selectors';

@Component({
	selector: 'app-read-location',
	templateUrl: './read-location.component.html',
	styleUrls: ['./read-location.component.scss', '../../base/base.component.scss'],
})
export class ReadLocationComponent implements OnInit {
	locationData$!: Observable<ApiLocationModel | null>;
	locationData!: ApiLocationModel | null;
	locationDataErro$!: Observable<string>;
	locationDataErro!: string;

	subscription: Subscription[] = [];

	constructor(private store: Store) {
		this.locationData$ = this.store.select(getReadLocationSuccess);
		this.locationDataErro$ = this.store.select(getReadLocationError);
	}

	ngOnInit(): void {
		this.actionPage();
	}

	actionPage() {
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
}

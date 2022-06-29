import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ApiLocationModel } from 'src/app/service/model/location.model';
import { getReadLocationError, getReadLocationSuccess } from 'src/app/store/selectors/read-location.selectors';
import { AppState } from 'src/app/store/state/app.state';

@Component({
	selector: 'app-read-location',
	templateUrl: './read-location.component.html',
	styleUrls: ['./read-location.component.scss', '../../base/base.component.scss'],
})
export class ReadLocationComponent implements OnInit {
	public locationData$!: Observable<ApiLocationModel | null>;
	public locationData!: ApiLocationModel | null;
	public locationDataErro$!: Observable<string>;
	public locationDataErro!: string;

	public subscription: Subscription[] = [];

	constructor(private store: Store<AppState>) {
		this.locationData$ = this.store.select(getReadLocationSuccess);
		this.locationDataErro$ = this.store.select(getReadLocationError);
	}

	public ngOnInit(): void {
		this.actionPage();
	}

	public actionPage(): void {
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

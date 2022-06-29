import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/state/app.state';
import { getPageLoading } from 'src/app/store/selectors/page-character.selectors';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
	public isLoading$!: Observable<boolean>;
	public isLoading: boolean = false;

	public subscription: Subscription[] = [];

	constructor(private store: Store<AppState>) {
		this.isLoading$ = this.store.select(getPageLoading);
	}

	ngOnInit(): void {
		this.subscription.push(
			this.isLoading$.subscribe((pageLoading) => {
				this.isLoading = pageLoading;
			})
		);
	}
}

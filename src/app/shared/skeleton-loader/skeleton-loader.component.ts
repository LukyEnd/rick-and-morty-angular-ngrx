import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-skeleton-loader',
	template: ` <div [ngStyle]="getMyStyles()" class="skeleton-load loader"></div> `,
	styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent {
	@Input() public Cwidth: any;
	@Input() public Cheight: any;

	constructor() {}

	public getMyStyles() {
		const myStyles = {
			'width.px': this.Cwidth ? this.Cwidth : '',
			'height.px': this.Cheight ? this.Cheight : '',
		};
		return myStyles;
	}
}

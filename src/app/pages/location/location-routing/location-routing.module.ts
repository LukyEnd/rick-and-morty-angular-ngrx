import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationModule } from './location.module';

const routes: Routes = [
	{
		path: '',
		component: LocationModule,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LocationRoutingModule {}

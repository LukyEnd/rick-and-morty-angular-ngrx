import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeModule } from './episode.module';

const routes: Routes = [
	{
		path: '',
		component: EpisodeModule,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EpisodeRoutingModule {}

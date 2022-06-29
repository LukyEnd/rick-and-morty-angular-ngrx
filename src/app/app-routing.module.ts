import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
	// { path: '', component: CharacterComponent },
	// {
	// 	path: '',
	// 	loadChildren: () => import('./pages/character/character-routing/character.module').then((m) => m.CharacterModule),
	// },
	{
		path: 'character',
		loadChildren: () => import('./pages/character/character-routing/character.module').then((m) => m.CharacterModule),
	},
	{
		path: 'episode',
		loadChildren: () => import('./pages/episode/episode-routing/episode.module').then((m) => m.EpisodeModule),
	},
	{
		path: 'location',
		loadChildren: () => import('./pages/location/location-routing/location.module').then((m) => m.LocationModule),
	},
	{ path: '**', component: ErrorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterModule } from './character.module';

const routes: Routes = [
	{
		path: '',
		component: CharacterModule,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CharacterRoutingModule {}

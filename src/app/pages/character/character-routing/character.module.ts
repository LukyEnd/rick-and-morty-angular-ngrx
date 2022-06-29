import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ThroughStringCharacterPipe } from 'src/app/pipe/through-string-character.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterComponent } from '../character.component';
import { ListCharacterComponent } from '../list-character/list-character.component';
import { ReadCharacterComponent } from '../read-character/read-character.component';
import { SkeletonCharacterComponent } from '../skeleton-character/skeleton-character.component';
import { CharacterRoutingModule } from './character-routing.module';

@NgModule({
	declarations: [
		CharacterComponent,
		ReadCharacterComponent,
		ListCharacterComponent,
		SkeletonCharacterComponent,
		ThroughStringCharacterPipe,
	],
	imports: [CommonModule, CharacterRoutingModule, MatCardModule, SharedModule],
})
export class CharacterModule {}

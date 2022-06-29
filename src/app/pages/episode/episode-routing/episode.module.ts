// import { AppModule } from 'src/app/app.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodeComponent } from '../episode.component';
import { EpisodeFormatPipe } from 'src/app/pipe/episode-format.pipe';
import { SkeletonEpisodeComponent } from '../skeleton-episode/skeleton-episode.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { ReadEpisodeComponent } from '../read-episode/read-episode.component';
import { TranslatorsMonthPipe } from 'src/app/pipe/translators-month.pipe';
import { ListEpisodeComponent } from '../list-episode/list-episode.component';
import { ThroughStringEpisodePipe } from 'src/app/pipe/through-string-episode.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [
		EpisodeComponent,
		EpisodeFormatPipe,
		SkeletonEpisodeComponent,
		ReadEpisodeComponent,
		TranslatorsMonthPipe,
		ListEpisodeComponent,
		ThroughStringEpisodePipe,
	],
	imports: [CommonModule, SharedModule, EpisodeRoutingModule],
})
export class EpisodeModule {}

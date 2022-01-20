import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './buttons/footer/footer.component';
import { HeaderComponent } from './buttons/header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StyleBaseComponent } from './pages/base/base.component';
import { CharacterComponent } from './pages/character/character.component';
import { ListCharacterComponent } from './pages/character/list-character/list-character.component';
import { ReadCharacterComponent } from './pages/character/read-character/read-character.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { ListEpisodeComponent } from './pages/episode/list-episode/list-episode.component';
import { ReadEpisodeComponent } from './pages/episode/read-episode/read-episode.component';
import { ErrorComponent } from './pages/error/error.component';
import { LocationComponent } from './pages/location/location.component';
import { ReadLocationComponent } from './pages/location/read-location/read-location.component';
import { EpisodeFormatPipe } from './pipe/episode-format.pipe';
import { ThroughStringCharacterPipe } from './pipe/through-string-character.pipe';
import { ThroughStringEpisodePipe } from './pipe/through-string-episode.pipe';
import { TranslatorsBrPipe } from './pipe/translators-br.pipe';
import { TranslatorsMonthPipe } from './pipe/translators-month.pipe';
import { PageCharacterEffects } from './store/effects/page-character.effects';
import { PageEpisodeEffects } from './store/effects/page-episode.effects';
import { PageInfoEffects } from './store/effects/page-info.effects';
import { PageLocationEffects } from './store/effects/page-location.effects';
import { ReadCharacterEffects } from './store/effects/read-character.effects';
import { ReadEpisodeEffects } from './store/effects/read-episode.effects';
import { ReadLocationEffects } from './store/effects/read-location.effects';
import { reducers } from './store/reducers/root.reducer';

@NgModule({
	declarations: [
		AppComponent,
		CharacterComponent,
		EpisodeComponent,
		LocationComponent,
		ReadCharacterComponent,
		ReadEpisodeComponent,
		ReadLocationComponent,
		HeaderComponent,
		StyleBaseComponent,
		CarouselComponent,
		ListEpisodeComponent,
		ListCharacterComponent,
		ThroughStringEpisodePipe,
		ThroughStringCharacterPipe,
		EpisodeFormatPipe,
		TranslatorsBrPipe,
		TranslatorsMonthPipe,
		ErrorComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatCardModule,
		StoreModule.forRoot(reducers, {}),
		MatDialogModule,
		EffectsModule.forRoot([
			PageCharacterEffects,
			PageEpisodeEffects,
			PageInfoEffects,
			PageLocationEffects,
			ReadCharacterEffects,
			ReadEpisodeEffects,
			ReadLocationEffects,
		]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

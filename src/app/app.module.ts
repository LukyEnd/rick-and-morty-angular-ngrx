import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleBaseComponent } from './pages/base/base.component';
import { ErrorComponent } from './pages/error/error.component';
import { FooterComponent } from './shared/buttons/footer/footer.component';
import { HeaderComponent } from './shared/buttons/header/header.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { PageCharacterEffects } from './store/effects/page-character.effects';
import { PageEpisodeEffects } from './store/effects/page-episode.effects';
import { PageInfoEffects } from './store/effects/page-info.effects';
import { PageLocationEffects } from './store/effects/page-location.effects';
import { ReadCharacterEffects } from './store/effects/read-character.effects';
import { ReadEpisodeEffects } from './store/effects/read-episode.effects';
import { ReadLocationEffects } from './store/effects/read-location.effects';
import { reducers } from './store/reducers/root.reducer';

@NgModule({
	declarations: [AppComponent, HeaderComponent, StyleBaseComponent, CarouselComponent, ErrorComponent, FooterComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
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

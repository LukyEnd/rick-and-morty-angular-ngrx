import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as fromCharacter from './page-character.reducer';
import * as fromEpisode from './page-episode.reducer';
import * as fromInfo from './page-info.reducer';
import * as fromLocation from './page-location.reducer';
import * as fromCharacterIndividually from './read-character.reducer';
import * as fromEpisodeIndividually from './read-episode.reducer';
import * as fromLocationIndividually from './read-location.reducer';
import * as fromListCharacter from './list-character.reducer';
import * as fromListEpisode from './list-episode.reducer';


export const reducers: ActionReducerMap<AppState> = {
	[fromCharacter.pageCharacterFeatureKey]: fromCharacter.characterReducer,
	[fromEpisode.pageEpisodeFeatureKey]: fromEpisode.episodeReducer,
	[fromInfo.pageInfoFeatureKey]: fromInfo.infoReducer,
	[fromLocation.pageLocationFeatureKey]: fromLocation.locationReducer,
	[fromCharacterIndividually.readCharacterFeatureKey]: fromCharacterIndividually.characterReducer,
	[fromEpisodeIndividually.readEpisodeFeatureKey]: fromEpisodeIndividually.episodeReducer,
	[fromLocationIndividually.readLocationFeatureKey]: fromLocationIndividually.locationReducer,
	[fromListCharacter.listCharacterFeatureKey]: fromListCharacter.listCharacterReducer,
	[fromListEpisode.listEpisodeFeatureKey]: fromListEpisode.listEpisodeReducer,
};

import { ListCharacterState } from '../reducers/list-character.reducer';
import { ListEpisodeState } from '../reducers/list-episode.reducer';
import { CharacterState } from '../reducers/page-character.reducer';
import { EpisodeState } from '../reducers/page-episode.reducer';
import { InfoState } from '../reducers/page-info.reducer';
import { LocationState } from '../reducers/page-location.reducer';
import { CharacterStateRead } from '../reducers/read-character.reducer';
import { EpisodeStateRead } from '../reducers/read-episode.reducer';
import { LocationStateRead } from '../reducers/read-location.reducer';

export interface AppState {
	pageCharacter: CharacterState;
	pageEpisode: EpisodeState;
	pageInfo: InfoState;
	pageLocation: LocationState;
	readCharacter: CharacterStateRead;
	readEpisode: EpisodeStateRead;
	readLocation: LocationStateRead;
	listCharacter: ListCharacterState;
	listEpisode: ListEpisodeState;
}

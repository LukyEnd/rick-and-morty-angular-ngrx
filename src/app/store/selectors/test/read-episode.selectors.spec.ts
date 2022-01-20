import * as fromReadEpisode from '../../reducers/read-episode.reducer';
import { selectReadEpisodeState } from '../read-episode.selectors';

describe('ReadEpisode Selectors', () => {
  it('should select the feature state', () => {
    const result = selectReadEpisodeState({
      [fromReadEpisode.readEpisodeFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});

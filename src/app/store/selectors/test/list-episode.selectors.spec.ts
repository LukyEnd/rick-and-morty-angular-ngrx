import * as fromListEpisode from '../../reducers/list-episode.reducer';
import { selectListEpisodeState } from '../../selectors/list-episode.selectors';

describe('ListEpisode Selectors', () => {
  it('should select the feature state', () => {
    const result = selectListEpisodeState({
      [fromListEpisode.listEpisodeFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});

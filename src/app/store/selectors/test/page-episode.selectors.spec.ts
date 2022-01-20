import * as fromPageEpisode from '../../reducers/page-episode.reducer';
import { selectPageEpisodeState } from '../../selectors/page-episode.selectors';

describe('PageEpisode Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPageEpisodeState({
      [fromPageEpisode.pageEpisodeFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});

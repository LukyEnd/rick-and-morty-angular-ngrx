import * as fromPageEpisode from '../page-episode.actions';

describe('loadPageEpisodes', () => {
  it('should return an action', () => {
    expect(fromPageEpisode.loadPageEpisodes({urlBase: ''}).type).toBe('[PageEpisode] Load PageEpisodes');
  });
});

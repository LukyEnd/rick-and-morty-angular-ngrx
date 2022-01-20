import * as fromReadEpisode from '../read-episode.actions';

describe('loadReadEpisodes', () => {
  it('should return an action', () => {
    expect(fromReadEpisode.loadReadEpisodes({urlBase: ''}).type).toBe('[ReadEpisode] Load ReadEpisodes');
  });
});

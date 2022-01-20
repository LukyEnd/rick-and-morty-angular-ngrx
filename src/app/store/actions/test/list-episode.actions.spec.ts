import * as fromListEpisode from '../list-episode.actions';

describe('loadListEpisodes', () => {
  it('should return an action', () => {
    expect(fromListEpisode.loadListEpisodes({listEpisode: []}).type).toBe('[ListEpisode] Load ListEpisodes');
  });
});

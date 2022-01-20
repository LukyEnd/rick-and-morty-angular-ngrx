import { episodeReducer, initialState } from '../page-episode.reducer';

describe('PageEpisode Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = episodeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

import { episodeReducer, initialState } from '../read-episode.reducer';

describe('ReadEpisode Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = episodeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

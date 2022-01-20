import { locationReducer, initialState } from '../page-location.reducer';

describe('PageLocation Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = locationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

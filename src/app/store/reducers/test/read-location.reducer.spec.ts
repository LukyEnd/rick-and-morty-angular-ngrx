import { initialState, locationReducer } from '../read-location.reducer';

describe('ReadLocation Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = locationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

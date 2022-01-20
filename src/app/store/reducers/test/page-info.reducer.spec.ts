import { infoReducer, initialState } from '../page-info.reducer';

describe('PageInfo Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = infoReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

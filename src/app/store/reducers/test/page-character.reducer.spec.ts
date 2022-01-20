import { characterReducer, initialState } from '../page-character.reducer';

describe('PageCharacter Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = characterReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

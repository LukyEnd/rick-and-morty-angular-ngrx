import { listCharacterReducer, initialState } from '../list-character.reducer';

describe('ListCharacter Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = listCharacterReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

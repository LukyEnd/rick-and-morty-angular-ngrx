import * as fromReadCharacter from '../../reducers/read-character.reducer';
import { selectReadCharacterState } from '../read-character.selectors';

describe('ReadCharacter Selectors', () => {
  it('should select the feature state', () => {
    const result = selectReadCharacterState({
      [fromReadCharacter.readCharacterFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});

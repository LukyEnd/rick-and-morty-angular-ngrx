import * as fromPageCharacter from '../../reducers/page-character.reducer';
import { selectPageCharacterState } from '../../selectors/page-character.selectors';

describe('PageCharacter Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPageCharacterState({
      [fromPageCharacter.pageCharacterFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});

import * as fromListCharacter from '../../reducers/list-character.reducer';
import { selectListCharacterState } from '../../selectors/list-character.selectors';

describe('ListCharacter Selectors', () => {
  it('should select the feature state', () => {
    const result = selectListCharacterState({
      [fromListCharacter.listCharacterFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});

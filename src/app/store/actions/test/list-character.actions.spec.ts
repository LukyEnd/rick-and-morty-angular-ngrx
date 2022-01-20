import * as fromListcharacter from '../list-character.actions';

describe('loadListCharacter', () => {
  it('should return an action', () => {
    expect(fromListcharacter.loadListCharacter({listCharacter: []}).type).toBe('[ListCharacter] Load ListCharacters');
  });
});

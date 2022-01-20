import * as fromPageCharacter from '../page-character.actions';

describe('loadPageCharacters', () => {
  it('should return an action', () => {
    expect(fromPageCharacter.loadPageCharacters({urlBase: ''}).type).toBe('[PageCharacter] Load PageCharacters');
  });
});

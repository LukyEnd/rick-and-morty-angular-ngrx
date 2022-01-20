import * as fromReadCharacter from '../read-character.actions';

describe('loadReadCharacters', () => {
  it('should return an action', () => {
    expect(fromReadCharacter.loadReadCharacters({urlBase: ''}).type).toBe('[ReadCharacter] Load ReadCharacters');
  });
});

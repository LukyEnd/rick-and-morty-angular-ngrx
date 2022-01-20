import * as fromReadLocation from '../read-location.actions';

describe('loadReadLocations', () => {
  it('should return an action', () => {
    expect(fromReadLocation.loadReadLocations({urlBase: ''}).type).toBe('[ReadLocation] Load ReadLocations');
  });
});

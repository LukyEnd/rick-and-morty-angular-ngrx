import * as fromPageLocation from '../page-location.actions';

describe('loadPageLocations', () => {
  it('should return an action', () => {
    expect(fromPageLocation.loadPageLocations({urlBase: ''}).type).toBe('[PageLocation] Load PageLocations');
  });
});

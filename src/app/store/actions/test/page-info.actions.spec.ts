import * as fromPageInfo from '../page-info.actions';

describe('loadPageInfos', () => {
  it('should return an action', () => {
    expect(fromPageInfo.loadPageInfos({urlBase: ''}).type).toBe('[PageInfo] Load PageInfos');
  });
});

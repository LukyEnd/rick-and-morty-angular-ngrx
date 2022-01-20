import * as fromPageInfo from '../../reducers/page-info.reducer';
import { selectPageInfoState } from '../../selectors/page-info.selectors';

describe('PageInfo Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPageInfoState({
      [fromPageInfo.pageInfoFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});

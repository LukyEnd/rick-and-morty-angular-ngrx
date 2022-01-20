import * as fromPageLocation from '../../reducers/page-location.reducer';
import { selectPageLocationState } from '../../selectors/page-location.selectors';

describe('PageLocation Selectors', () => {
	it('should select the feature state', () => {
		const result = selectPageLocationState({
			[fromPageLocation.pageLocationFeatureKey]: {},
		});

		// expect(result).toEqual({});
	});
});

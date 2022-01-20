import * as fromReadLocation from '../../reducers/read-location.reducer';
import { selectReadLocationState } from '../../selectors/read-location.selectors';

describe('ReadLocation Selectors', () => {
	it('should select the feature state', () => {
		const result = selectReadLocationState({
			[fromReadLocation.readLocationFeatureKey]: {},
		});

		// expect(result).toEqual({});
	});
});

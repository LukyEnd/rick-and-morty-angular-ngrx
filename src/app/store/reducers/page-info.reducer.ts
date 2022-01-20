import { Action, createReducer, on } from '@ngrx/store';
import { ApiPageModel } from 'src/app/service/model/page.module';
import * as PageInfoActions from '../actions/page-info.actions';

export const pageInfoFeatureKey = 'pageInfo';

export interface InfoState {
	infoUrl: ApiPageModel | null;
	error: string;
}

export const initialState: InfoState = {
	infoUrl: null,
	error: '',
};

export const infoReducer = createReducer(
	initialState,

	on(PageInfoActions.loadPageInfosSuccess, (state, action): InfoState => {
		return {
			...state,
			infoUrl: action.infoUrl,
			error: '',
		};
	}),
	on(PageInfoActions.loadPageInfosFailure, (state, action): InfoState => {
		return {
			infoUrl: null,
			error: action.error,
		};
	})
);

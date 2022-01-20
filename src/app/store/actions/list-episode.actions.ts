import { createAction, props } from '@ngrx/store';

export const loadListEpisodes = createAction(
  '[ListEpisode] Load ListEpisodes',
  props<{ listEpisode: [] }>()
);


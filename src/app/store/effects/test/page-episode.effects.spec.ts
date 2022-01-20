import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PageEpisodeEffects } from '../page-episode.effects';

describe('PageEpisodeEffects', () => {
  let actions$: Observable<any>;
  let effects: PageEpisodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PageEpisodeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PageEpisodeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

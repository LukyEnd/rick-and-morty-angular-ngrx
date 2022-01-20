import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReadEpisodeEffects } from '../read-episode.effects';

describe('ReadEpisodeEffects', () => {
  let actions$: Observable<any>;
  let effects: ReadEpisodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReadEpisodeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ReadEpisodeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

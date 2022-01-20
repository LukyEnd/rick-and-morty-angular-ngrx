import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReadLocationEffects } from '../read-location.effects';

describe('ReadLocationEffects', () => {
  let actions$: Observable<any>;
  let effects: ReadLocationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReadLocationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ReadLocationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

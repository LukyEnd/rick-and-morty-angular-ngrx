import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PageLocationEffects } from '../page-location.effects';

describe('PageLocationEffects', () => {
  let actions$: Observable<any>;
  let effects: PageLocationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PageLocationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PageLocationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

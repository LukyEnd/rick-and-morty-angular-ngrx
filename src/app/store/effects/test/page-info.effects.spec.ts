import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PageInfoEffects } from '../page-info.effects';

describe('PageInfoEffects', () => {
  let actions$: Observable<any>;
  let effects: PageInfoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PageInfoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PageInfoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

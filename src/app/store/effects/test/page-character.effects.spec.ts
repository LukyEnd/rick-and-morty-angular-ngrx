import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PageCharacterEffects } from '../page-character.effects';

describe('PageCharacterEffects', () => {
  let actions$: Observable<any>;
  let effects: PageCharacterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PageCharacterEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PageCharacterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

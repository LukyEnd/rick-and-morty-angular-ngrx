import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReadCharacterEffects } from '../read-character.effects';

describe('ReadCharacterEffects', () => {
  let actions$: Observable<any>;
  let effects: ReadCharacterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReadCharacterEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ReadCharacterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonEpisodeComponent } from './skeleton-episode.component';

describe('SkeletonEpisodeComponent', () => {
  let component: SkeletonEpisodeComponent;
  let fixture: ComponentFixture<SkeletonEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonEpisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

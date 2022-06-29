import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLocationComponent } from './skeleton-location.component';

describe('SkeletonLocationComponent', () => {
  let component: SkeletonLocationComponent;
  let fixture: ComponentFixture<SkeletonLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

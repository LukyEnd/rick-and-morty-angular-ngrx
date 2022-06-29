import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonCharacterComponent } from './skeleton-character.component';

describe('SkeletonCharacterComponent', () => {
	let component: SkeletonCharacterComponent;
	let fixture: ComponentFixture<SkeletonCharacterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SkeletonCharacterComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SkeletonCharacterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

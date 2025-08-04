import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobSeekerComponent } from './all-job-seeker-component';

describe('AllJobSeekerComponent', () => {
  let component: AllJobSeekerComponent;
  let fixture: ComponentFixture<AllJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllJobSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobseekerComponent } from './add-jobseeker-component';

describe('AddJobseekerComponent', () => {
  let component: AddJobseekerComponent;
  let fixture: ComponentFixture<AddJobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddJobseekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

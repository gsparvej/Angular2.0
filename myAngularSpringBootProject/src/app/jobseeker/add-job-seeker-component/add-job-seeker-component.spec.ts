import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobSeekerComponent } from './add-job-seeker-component';

describe('AddJobSeekerComponent', () => {
  let component: AddJobSeekerComponent;
  let fixture: ComponentFixture<AddJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddJobSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

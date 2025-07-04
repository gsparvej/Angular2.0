import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateManagement } from './update-management';

describe('UpdateManagement', () => {
  let component: UpdateManagement;
  let fixture: ComponentFixture<UpdateManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

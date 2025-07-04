import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllManagement } from './view-all-management';

describe('ViewAllManagement', () => {
  let component: ViewAllManagement;
  let fixture: ComponentFixture<ViewAllManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

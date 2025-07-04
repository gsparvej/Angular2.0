import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagement } from './add-management';

describe('AddManagement', () => {
  let component: AddManagement;
  let fixture: ComponentFixture<AddManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

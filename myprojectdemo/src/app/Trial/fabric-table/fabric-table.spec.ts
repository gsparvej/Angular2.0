import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricTable } from './fabric-table';

describe('FabricTable', () => {
  let component: FabricTable;
  let fixture: ComponentFixture<FabricTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FabricTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

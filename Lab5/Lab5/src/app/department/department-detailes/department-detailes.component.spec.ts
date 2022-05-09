import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailesComponent } from './department-detailes.component';

describe('DepartmentDetailesComponent', () => {
  let component: DepartmentDetailesComponent;
  let fixture: ComponentFixture<DepartmentDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

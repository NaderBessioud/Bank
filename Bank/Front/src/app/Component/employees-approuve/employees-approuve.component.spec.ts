import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesApprouveComponent } from './employees-approuve.component';

describe('EmployeesApprouveComponent', () => {
  let component: EmployeesApprouveComponent;
  let fixture: ComponentFixture<EmployeesApprouveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesApprouveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesApprouveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

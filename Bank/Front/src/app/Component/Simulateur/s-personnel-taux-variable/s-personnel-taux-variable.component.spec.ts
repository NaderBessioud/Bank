import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPersonnelTauxVariableComponent } from './s-personnel-taux-variable.component';

describe('SPersonnelTauxVariableComponent', () => {
  let component: SPersonnelTauxVariableComponent;
  let fixture: ComponentFixture<SPersonnelTauxVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPersonnelTauxVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPersonnelTauxVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

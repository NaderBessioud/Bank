import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVehiculeTauxVariableComponent } from './s-vehicule-taux-variable.component';

describe('SVehiculeTauxVariableComponent', () => {
  let component: SVehiculeTauxVariableComponent;
  let fixture: ComponentFixture<SVehiculeTauxVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SVehiculeTauxVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SVehiculeTauxVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

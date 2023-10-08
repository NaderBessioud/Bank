import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STauxVariableComponent } from './s-taux-variable.component';

describe('STauxVariableComponent', () => {
  let component: STauxVariableComponent;
  let fixture: ComponentFixture<STauxVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STauxVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STauxVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCongeComponent } from './formulaire-conge.component';

describe('FormulaireCongeComponent', () => {
  let component: FormulaireCongeComponent;
  let fixture: ComponentFixture<FormulaireCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

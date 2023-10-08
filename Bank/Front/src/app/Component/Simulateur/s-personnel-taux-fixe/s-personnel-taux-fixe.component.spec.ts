import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPersonnelTauxFixeComponent } from './s-personnel-taux-fixe.component';

describe('SPersonnelTauxFixeComponent', () => {
  let component: SPersonnelTauxFixeComponent;
  let fixture: ComponentFixture<SPersonnelTauxFixeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPersonnelTauxFixeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPersonnelTauxFixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

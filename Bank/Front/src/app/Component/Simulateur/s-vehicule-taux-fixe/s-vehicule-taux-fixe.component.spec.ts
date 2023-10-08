import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVehiculeTauxFixeComponent } from './s-vehicule-taux-fixe.component';

describe('SVehiculeTauxFixeComponent', () => {
  let component: SVehiculeTauxFixeComponent;
  let fixture: ComponentFixture<SVehiculeTauxFixeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SVehiculeTauxFixeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SVehiculeTauxFixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

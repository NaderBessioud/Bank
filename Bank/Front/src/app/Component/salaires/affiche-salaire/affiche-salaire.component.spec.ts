import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheSalaireComponent } from './affiche-salaire.component';

describe('AfficheSalaireComponent', () => {
  let component: AfficheSalaireComponent;
  let fixture: ComponentFixture<AfficheSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheSalaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

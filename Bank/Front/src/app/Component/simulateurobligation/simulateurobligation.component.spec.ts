import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurobligationComponent } from './simulateurobligation.component';

describe('SimulateurobligationComponent', () => {
  let component: SimulateurobligationComponent;
  let fixture: ComponentFixture<SimulateurobligationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateurobligationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateurobligationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

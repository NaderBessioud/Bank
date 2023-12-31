import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationComponent } from './obligation.component';

describe('ObligationComponent', () => {
  let component: ObligationComponent;
  let fixture: ComponentFixture<ObligationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObligationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

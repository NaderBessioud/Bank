import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationdetailsComponent } from './obligationdetails.component';

describe('ObligationdetailsComponent', () => {
  let component: ObligationdetailsComponent;
  let fixture: ComponentFixture<ObligationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObligationdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

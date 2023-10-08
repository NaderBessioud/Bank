import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationfrontComponent } from './obligationfront.component';

describe('ObligationfrontComponent', () => {
  let component: ObligationfrontComponent;
  let fixture: ComponentFixture<ObligationfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObligationfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

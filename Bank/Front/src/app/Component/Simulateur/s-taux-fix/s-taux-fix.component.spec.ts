import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STauxFixComponent } from './s-taux-fix.component';

describe('STauxFixComponent', () => {
  let component: STauxFixComponent;
  let fixture: ComponentFixture<STauxFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STauxFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STauxFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatActionComponent } from './stat-action.component';

describe('StatActionComponent', () => {
  let component: StatActionComponent;
  let fixture: ComponentFixture<StatActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

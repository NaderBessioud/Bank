import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourFerierComponent } from './jour-ferier.component';

describe('JourFerierComponent', () => {
  let component: JourFerierComponent;
  let fixture: ComponentFixture<JourFerierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourFerierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourFerierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

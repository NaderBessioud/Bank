import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCongeComponent } from './afficher-conge.component';

describe('AfficherCongeComponent', () => {
  let component: AfficherCongeComponent;
  let fixture: ComponentFixture<AfficherCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

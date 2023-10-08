import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFormationsComponent } from './afficher-formations.component';

describe('AfficherFormationsComponent', () => {
  let component: AfficherFormationsComponent;
  let fixture: ComponentFixture<AfficherFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherFormationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

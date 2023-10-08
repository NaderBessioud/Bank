import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormationsComponent } from './ajouter-formations.component';

describe('AjouterFormationsComponent', () => {
  let component: AjouterFormationsComponent;
  let fixture: ComponentFixture<AjouterFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFormationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

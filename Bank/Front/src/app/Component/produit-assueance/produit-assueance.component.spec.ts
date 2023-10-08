import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitAssueanceComponent } from './produit-assueance.component';

describe('ProduitAssueanceComponent', () => {
  let component: ProduitAssueanceComponent;
  let fixture: ComponentFixture<ProduitAssueanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitAssueanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitAssueanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

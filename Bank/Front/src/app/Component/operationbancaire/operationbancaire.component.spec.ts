import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationbancaireComponent } from './operationbancaire.component';

describe('OperationbancaireComponent', () => {
  let component: OperationbancaireComponent;
  let fixture: ComponentFixture<OperationbancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationbancaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationbancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

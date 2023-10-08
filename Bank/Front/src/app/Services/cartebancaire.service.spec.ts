import { TestBed } from '@angular/core/testing';

import { CartebancaireService } from './cartebancaire.service';

describe('CartebancaireService', () => {
  let service: CartebancaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartebancaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

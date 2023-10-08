import { TestBed } from '@angular/core/testing';

import { OperationbancaireService } from './operationbancaire.service';

describe('OperationbancaireService', () => {
  let service: OperationbancaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationbancaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

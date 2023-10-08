import { TestBed } from '@angular/core/testing';

import { SecurityvirementService } from './securityvirement.service';

describe('SecurityvirementService', () => {
  let service: SecurityvirementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityvirementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

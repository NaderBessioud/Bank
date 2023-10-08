import { TestBed } from '@angular/core/testing';

import { DemandecreationctitService } from './demandecreationctit.service';

describe('DemandecreationctitService', () => {
  let service: DemandecreationctitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandecreationctitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

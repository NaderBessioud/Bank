import { TestBed } from '@angular/core/testing';

import { ComptetitreservService } from './comptetitreserv.service';

describe('ComptetitreservService', () => {
  let service: ComptetitreservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptetitreservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

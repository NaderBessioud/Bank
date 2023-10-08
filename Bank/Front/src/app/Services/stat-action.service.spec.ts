import { TestBed } from '@angular/core/testing';

import { StatActionService } from './stat-action.service';

describe('StatActionService', () => {
  let service: StatActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

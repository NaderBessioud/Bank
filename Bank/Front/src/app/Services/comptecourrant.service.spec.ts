import { TestBed } from '@angular/core/testing';

import { ComptecourrantService } from './comptecourrant.service';

describe('ComptecourrantService', () => {
  let service: ComptecourrantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptecourrantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

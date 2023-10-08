import { TestBed } from '@angular/core/testing';

import { FormationsServicesService } from './formations-services.service';

describe('FormationsServicesService', () => {
  let service: FormationsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

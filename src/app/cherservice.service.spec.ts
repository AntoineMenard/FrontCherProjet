import { TestBed } from '@angular/core/testing';

import { CherserviceService } from './cherservice.service';

describe('CherserviceService', () => {
  let service: CherserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CherserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

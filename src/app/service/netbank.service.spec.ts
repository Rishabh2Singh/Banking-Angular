import { TestBed } from '@angular/core/testing';

import { NetbankService } from './netbank.service';

describe('NetbankService', () => {
  let service: NetbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

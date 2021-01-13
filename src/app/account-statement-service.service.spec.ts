import { TestBed } from '@angular/core/testing';

import { AccountStatementServiceService } from './account-statement-service.service';

describe('AccountStatementServiceService', () => {
  let service: AccountStatementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountStatementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

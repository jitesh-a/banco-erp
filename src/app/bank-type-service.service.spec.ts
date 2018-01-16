import { TestBed, inject } from '@angular/core/testing';

import { BankTypeServiceService } from './bank-type-service.service';

describe('BankTypeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankTypeServiceService]
    });
  });

  it('should be created', inject([BankTypeServiceService], (service: BankTypeServiceService) => {
    expect(service).toBeTruthy();
  }));
});

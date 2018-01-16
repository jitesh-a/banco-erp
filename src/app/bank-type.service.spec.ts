import { TestBed, inject } from '@angular/core/testing';

import { BankTypeService } from './bank-type.service';

describe('BankTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankTypeService]
    });
  });

  it('should be created', inject([BankTypeService], (service: BankTypeService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ExcellentPerformanceService } from './excellent-performance.service';

describe('ExcellentPerformanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcellentPerformanceService]
    });
  });

  it('should be created', inject([ExcellentPerformanceService], (service: ExcellentPerformanceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { TechnologyDetailsService } from './technology-details.service';

describe('TechnologyDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnologyDetailsService]
    });
  });

  it('should be created', inject([TechnologyDetailsService], (service: TechnologyDetailsService) => {
    expect(service).toBeTruthy();
  }));
});

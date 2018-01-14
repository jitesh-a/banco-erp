import { TestBed, inject } from '@angular/core/testing';

import { SponsorAndGuestService } from './sponsor-and-guest.service';

describe('SponsorAndGuestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SponsorAndGuestService]
    });
  });

  it('should be created', inject([SponsorAndGuestService], (service: SponsorAndGuestService) => {
    expect(service).toBeTruthy();
  }));
});

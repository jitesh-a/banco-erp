import { TestBed, inject } from '@angular/core/testing';

import { PickupAndDropService } from './pickup-and-drop.service';

describe('PickupAndDropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PickupAndDropService]
    });
  });

  it('should be created', inject([PickupAndDropService], (service: PickupAndDropService) => {
    expect(service).toBeTruthy();
  }));
});

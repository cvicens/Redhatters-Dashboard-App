import { TestBed, inject } from '@angular/core/testing';

import { FHService } from './fh.service';

describe('FHService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FHService]
    });
  });

  it('should ...', inject([FHService], (service: FHService) => {
    expect(service).toBeTruthy();
  }));
});

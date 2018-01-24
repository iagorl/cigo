import { TestBed, inject } from '@angular/core/testing';

import { CigoDataService } from './cigo-data.service';

describe('CigoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CigoDataService]
    });
  });

  it('should be created', inject([CigoDataService], (service: CigoDataService) => {
    expect(service).toBeTruthy();
  }));
});

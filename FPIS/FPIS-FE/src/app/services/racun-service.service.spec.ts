import { TestBed } from '@angular/core/testing';

import { RacunServiceService } from './racun-service.service';

describe('RacunServiceService', () => {
  let service: RacunServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacunServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

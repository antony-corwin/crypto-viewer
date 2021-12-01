import { TestBed } from '@angular/core/testing';

import { RestCoinapiService } from './rest-coinapi.service';

describe('RestCoinapiService', () => {
  let service: RestCoinapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestCoinapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

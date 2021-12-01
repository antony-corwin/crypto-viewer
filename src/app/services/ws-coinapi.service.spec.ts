import { TestBed } from '@angular/core/testing';

import { WsCoinapiService } from './ws-coinapi.service';

describe('WsCoinapiService', () => {
  let service: WsCoinapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsCoinapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

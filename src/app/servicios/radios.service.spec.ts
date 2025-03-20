import { TestBed } from '@angular/core/testing';

import { RadiosService } from './radios.service';

describe('RadiosService', () => {
  let service: RadiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

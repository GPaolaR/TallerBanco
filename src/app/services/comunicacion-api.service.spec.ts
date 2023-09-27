import { TestBed } from '@angular/core/testing';

import { ComunicacionAPIService } from './comunicacion-api.service';

describe('ComunicacionAPIService', () => {
  let service: ComunicacionAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

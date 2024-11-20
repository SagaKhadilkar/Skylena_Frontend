import { TestBed } from '@angular/core/testing';

import { SkylenaService } from './skylena.service';

describe('SkylenaService', () => {
  let service: SkylenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkylenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

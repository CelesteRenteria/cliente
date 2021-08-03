import { TestBed } from '@angular/core/testing';

import { YachtsService } from './yachts.service';

describe('YachtsService', () => {
  let service: YachtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YachtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

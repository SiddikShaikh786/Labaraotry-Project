import { TestBed } from '@angular/core/testing';

import { UserregService } from './userreg.service';

describe('UserregService', () => {
  let service: UserregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

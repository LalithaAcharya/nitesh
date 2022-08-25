import { TestBed } from '@angular/core/testing';

import { AuthunticateService } from './authunticate.service';

describe('AuthunticateService', () => {
  let service: AuthunticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthunticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

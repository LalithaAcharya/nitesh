import { TestBed } from '@angular/core/testing';

import { TeicketService } from './teicket.service';

describe('TeicketService', () => {
  let service: TeicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

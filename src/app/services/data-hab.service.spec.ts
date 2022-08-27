import { TestBed } from '@angular/core/testing';

import { DataHabService } from './data-hab.service';

describe('DataHabService', () => {
  let service: DataHabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

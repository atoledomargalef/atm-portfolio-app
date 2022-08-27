import { TestBed } from '@angular/core/testing';

import { DataHabsService } from './data-habs.service';

describe('DataHabsService', () => {
  let service: DataHabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

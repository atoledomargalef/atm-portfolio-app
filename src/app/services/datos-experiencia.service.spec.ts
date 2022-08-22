import { TestBed } from '@angular/core/testing';

import { DatosExperienciaService } from './datos-experiencia.service';

describe('DatosExperienciaService', () => {
  let service: DatosExperienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosExperienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

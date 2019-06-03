import { TestBed } from '@angular/core/testing';

import { SeminarService } from './seminar.service';

describe('SeminarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeminarService = TestBed.get(SeminarService);
    expect(service).toBeTruthy();
  });
});

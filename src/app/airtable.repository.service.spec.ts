import { TestBed } from '@angular/core/testing';

import { AirtableRepositoryService } from './airtable.repository.service';

describe('AirtableRepositoryService', () => {
  let service: AirtableRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirtableRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

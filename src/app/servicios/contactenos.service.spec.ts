import { TestBed } from '@angular/core/testing';

import { contactenosService } from './contactenos.service';

describe('ContactenosService', () => {
  let service: contactenosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(contactenosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ResponsablerhService } from './responsablerh.service';

describe('ResponsablerhService', () => {
  let service: ResponsablerhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsablerhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

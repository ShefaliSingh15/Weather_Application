import { TestBed, inject } from '@angular/core/testing';

import { SearchpageService } from './searchpage.service';

describe('SearchpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchpageService]
    });
  });

  it('should be created', inject([SearchpageService], (service: SearchpageService) => {
    expect(service).toBeTruthy();
  }));
});

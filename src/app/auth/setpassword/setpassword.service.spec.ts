import { TestBed, inject } from '@angular/core/testing';

import { SetpasswordService } from './setpassword.service';

describe('SetpasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetpasswordService]
    });
  });

  it('should be created', inject([SetpasswordService], (service: SetpasswordService) => {
    expect(service).toBeTruthy();
  }));
});

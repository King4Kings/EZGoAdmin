import { TestBed, inject } from '@angular/core/testing';

import { RightinfoService } from './rightinfo.service';

describe('RightinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RightinfoService]
    });
  });

  it('should be created', inject([RightinfoService], (service: RightinfoService) => {
    expect(service).toBeTruthy();
  }));
});

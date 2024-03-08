import { TestBed } from '@angular/core/testing';

import { DiemkhoanService } from './diemkhoan.service';

describe('DiemkhoanService', () => {
  let service: DiemkhoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiemkhoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

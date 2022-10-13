import { TestBed } from '@angular/core/testing';

import { MyaadharService } from './myaadhar.service';

describe('MyaadharService', () => {
  let service: MyaadharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyaadharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { AddressHelperService } from './address-helper.service';

describe('AddressHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressHelperService]
    });
  });

  it('should be created', inject([AddressHelperService], (service: AddressHelperService) => {
    expect(service).toBeTruthy();
  }));
});

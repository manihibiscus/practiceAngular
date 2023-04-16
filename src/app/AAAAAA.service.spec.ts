/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AAAAAAService } from './AAAAAA.service';

describe('Service: AAAAAA', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AAAAAAService]
    });
  });

  it('should ...', inject([AAAAAAService], (service: AAAAAAService) => {
    expect(service).toBeTruthy();
  }));
});

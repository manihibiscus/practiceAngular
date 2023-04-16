/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChooseServiceService } from './chooseService.service';

describe('Service: ChooseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChooseServiceService]
    });
  });

  it('should ...', inject([ChooseServiceService], (service: ChooseServiceService) => {
    expect(service).toBeTruthy();
  }));
});

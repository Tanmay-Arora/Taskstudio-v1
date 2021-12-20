import { TestBed } from '@angular/core/testing';

import { FlexadjustService } from './flexadjust.service';

describe('FlexadjustService', () => {
  let service: FlexadjustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlexadjustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

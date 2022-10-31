import { TestBed } from '@angular/core/testing';

import { SocialTabService } from './social-tab.service';

describe('SocialTabService', () => {
  let service: SocialTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

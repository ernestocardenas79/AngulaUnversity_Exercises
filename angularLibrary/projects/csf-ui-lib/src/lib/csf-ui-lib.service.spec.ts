import { TestBed, inject } from '@angular/core/testing';

import { CsfUiLibService } from './csf-ui-lib.service';

describe('CsfUiLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsfUiLibService]
    });
  });

  it('should be created', inject([CsfUiLibService], (service: CsfUiLibService) => {
    expect(service).toBeTruthy();
  }));
});

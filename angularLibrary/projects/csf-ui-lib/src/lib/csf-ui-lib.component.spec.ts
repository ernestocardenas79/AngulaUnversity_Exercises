import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfUiLibComponent } from './csf-ui-lib.component';

describe('CsfUiLibComponent', () => {
  let component: CsfUiLibComponent;
  let fixture: ComponentFixture<CsfUiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfUiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

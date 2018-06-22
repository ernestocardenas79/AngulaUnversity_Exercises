import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfTabComponent } from './csf-tab.component';

describe('CsfTabComponent', () => {
  let component: CsfTabComponent;
  let fixture: ComponentFixture<CsfTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

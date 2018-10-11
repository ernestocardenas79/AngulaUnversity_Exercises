import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfTabPanelComponent } from './csf-tab-panel.component';

describe('CsfTabPanelComponent', () => {
  let component: CsfTabPanelComponent;
  let fixture: ComponentFixture<CsfTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

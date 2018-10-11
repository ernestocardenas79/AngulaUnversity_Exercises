import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfInputMdComponent } from './csf-input-md.component';

describe('CsfInputMdComponent', () => {
  let component: CsfInputMdComponent;
  let fixture: ComponentFixture<CsfInputMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfInputMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfInputMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

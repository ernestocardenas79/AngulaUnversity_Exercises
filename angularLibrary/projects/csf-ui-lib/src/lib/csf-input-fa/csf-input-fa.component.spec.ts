import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfInputFaComponent } from './csf-input-fa.component';

describe('CsfInputFaComponent', () => {
  let component: CsfInputFaComponent;
  let fixture: ComponentFixture<CsfInputFaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfInputFaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfInputFaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

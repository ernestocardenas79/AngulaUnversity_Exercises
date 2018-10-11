import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CsfTabComponent, CsfTabPanelComponent } from 'projects/csf-ui-lib';

describe('AppComponent', () => {
  let component: AppComponent,
      fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CsfTabComponent, CsfTabPanelComponent
      ],
    }).compileComponents();
  }));
 
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  })

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

});

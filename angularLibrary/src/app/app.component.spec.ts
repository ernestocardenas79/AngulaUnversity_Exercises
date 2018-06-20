import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CsfInputFaComponent, CsfInputDirective } from 'projects/csf-ui-lib';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { by } from 'protractor';

describe('AppComponent', () => {
  let component: AppComponent,
      fixture: ComponentFixture<AppComponent>,
      el: DebugElement,
      emailField: DebugElement;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CsfInputFaComponent, CsfInputDirective
      ],
    }).compileComponents();
  }));
 
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    emailField = el.query(By.css('#email-field'));

    fixture.detectChanges();
    
  })

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should create a font awesome emial input', async(() => {
    expect(emailField).toBeTruthy();
  }));

  it('should include the correct emial icon inside the email input', async(() => {
    console.log(emailField.nativeElement.outerHTML);



    expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
  }));

  it('should have projected the correct test input inside the email input', async(() => {
    expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
  }));
  
});

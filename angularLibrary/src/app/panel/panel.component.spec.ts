import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from './panel.component';
import { DebugElement } from '@angular/core';
import { CsfTabComponent, CsfTabPanelComponent } from 'projects/csf-ui-lib';
import { By } from '@angular/platform-browser';


describe('PanelComponent', () => {
  let component: PanelComponent,
      fixture: ComponentFixture<PanelComponent>,
      el: DebugElement,
      tabPanel: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelComponent, CsfTabComponent, CsfTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();
    
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should find only one tab inside the tab container', async(() => {
    const tabs = tabPanel.queryAll(By.css('.tab'));

    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  }));

  it('should find only one tab inside the tab container', async(() => {
    const selectedButton = tabPanel.query(
        By.css('.tab-panel-buttons li.selected')).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toBe("Contact");
  }));

  it('should display the contacts tab', async(() => {
    const contactEmail = tabPanel.query(By.css('.contact-email'));

    expect(contactEmail).toBeTruthy();
  }));

  it('should display the contacts tab', async(() => {
    const contactEmail = tabPanel.query(By.css('.contact-email'));

    expect(contactEmail).toBeTruthy();
  }));

  it('should switch to the Login Tab', async(() => {
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));

    tabButtons[0].nativeElement.click();

    fixture.detectChanges();

    const loginEmail = tabPanel.query(By.css('.login-email'));
    expect(loginEmail).toBeTruthy();

      const selectedButton = tabPanel.query(
        By.css('.tab-panel-buttons li.selected')).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toBe('Login');

  }));
});

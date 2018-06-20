import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CsfInputFaComponent, CsfInputDirective } from 'projects/csf-ui-lib';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CsfInputFaComponent, CsfInputDirective
      ],
    }).compileComponents();
  }));
 
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

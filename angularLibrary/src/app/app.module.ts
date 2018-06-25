import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CsfUiLibModule } from 'projects/csf-ui-lib';
import { CaptureComponent } from './capture/capture.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptureComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    CsfUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

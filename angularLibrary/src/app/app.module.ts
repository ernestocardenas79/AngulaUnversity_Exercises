import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CsfUiLibModule } from 'projects/csf-ui-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CsfUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

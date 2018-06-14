import { NgModule, } from '@angular/core';
import { CsfInputFaComponent } from './csf-input-fa/csf-input-fa.component';
import { BrowserModule } from '@angular/platform-browser';
import { CsfInputDirective } from './common/csf-input.directive';

@NgModule({
  imports: [
    BrowserModule 
  ],
  declarations: [CsfInputFaComponent, CsfInputDirective],
  exports: [CsfInputFaComponent, CsfInputDirective ]
})
export class CsfUiLibModule { }

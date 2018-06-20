import { NgModule, } from '@angular/core';
import { CsfInputFaComponent } from './csf-input-fa/csf-input-fa.component';
import { BrowserModule } from '@angular/platform-browser';
import { CsfInputDirective } from './common/csf-input.directive';
import { CsfInputMdComponent } from './csf-input-md/csf-input-md.component';

@NgModule({
  imports: [
    BrowserModule 
  ],
  declarations: [CsfInputFaComponent, CsfInputDirective, CsfInputMdComponent],
  exports: [CsfInputFaComponent, CsfInputDirective, CsfInputMdComponent ]
})
export class CsfUiLibModule { }

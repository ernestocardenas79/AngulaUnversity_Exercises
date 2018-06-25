import { NgModule, } from '@angular/core';
import { CsfInputFaComponent } from './csf-input-fa/csf-input-fa.component';
import { BrowserModule } from '@angular/platform-browser';
import { CsfInputDirective } from './common/csf-input.directive';
import { CsfInputMdComponent } from './csf-input-md/csf-input-md.component';
import { CsfTabPanelComponent } from './csf-tab-panel/csf-tab-panel.component';
import { CsfTabComponent } from './csf-tab/csf-tab.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    BrowserModule 
  ],
  declarations: [CsfInputFaComponent, 
                 CsfInputDirective, 
                 CsfInputMdComponent, 
                 CsfTabPanelComponent, 
                 CsfTabComponent, 
                 ModalComponent],
  exports: [CsfInputFaComponent, 
          CsfInputDirective,
          CsfInputMdComponent, 
          CsfTabPanelComponent, 
          CsfTabComponent,
          ModalComponent]
})
export class CsfUiLibModule { }

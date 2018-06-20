import { Component, OnInit, Input, HostBinding, ContentChild, AfterContentInit } from '@angular/core';
import { CsfInputDirective } from '../common/csf-input.directive';

@Component({
  selector: 'csf-input-md',
  templateUrl: './csf-input-md.component.html',
  styleUrls: ['./csf-input-md.component.scss']
})
export class CsfInputMdComponent implements AfterContentInit {

  @Input()
  icon: string;

  @ContentChild(CsfInputDirective)
  input: CsfInputDirective;

  constructor() { }

  ngAfterContentInit() {
    if (!this.input){
      console.error('The component needs an input inside the content')
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus(){
    return this.input ? this.input.focus : false;
  }

}

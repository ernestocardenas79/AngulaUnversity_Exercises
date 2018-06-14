import { Component, OnInit, Input, AfterContentInit, ContentChild, HostBinding } from '@angular/core';
import { CsfInputDirective } from '../common/csf-input.directive';

@Component({
  selector: 'csf-input-fa',
  templateUrl: './csf-input-fa.component.html',
  styleUrls: ['./csf-input-fa.component.scss']
})
export class CsfInputFaComponent implements AfterContentInit {

  @Input()
  icon:string;

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

  get classes(){
    
    const cssClasses = {};

    if(this.icon){
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}

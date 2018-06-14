import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[csf-input-fa input]'
})
export class CsfInputDirective {

  focus = false;

  constructor() { }

  @HostListener('focus')
  onFocus(){
    this.focus= true;
  }

  @HostListener('blur')
  onBlur(){
    this.focus= false;
  }
  
}

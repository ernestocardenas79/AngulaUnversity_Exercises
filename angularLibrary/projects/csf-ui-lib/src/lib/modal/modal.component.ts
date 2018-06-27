import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'csf-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

@Input()
body: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}

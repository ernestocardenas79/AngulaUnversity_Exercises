import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'csf-tab',
  templateUrl: './csf-tab.component.html',
  styleUrls: ['./csf-tab.component.scss']
})
export class CsfTabComponent implements OnInit {

@Input()
title:string;

@Input()
selected=false;

  constructor() { }

  ngOnInit() {
  }

}

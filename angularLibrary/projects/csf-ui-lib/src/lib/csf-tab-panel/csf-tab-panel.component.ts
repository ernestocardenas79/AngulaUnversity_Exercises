import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, TemplateRef, Input } from '@angular/core';
import { CsfTabComponent } from 'csf-ui-lib/src/lib/csf-tab/csf-tab.component';

@Component({
  selector: 'csf-tab-panel',
  templateUrl: './csf-tab-panel.component.html',
  styleUrls: ['../tab-panel.component.scss']
})
export class CsfTabPanelComponent implements AfterContentInit {

  @ContentChildren(CsfTabComponent)
  tabs: QueryList<CsfTabComponent>

  @Input()
  headerTemplate: TemplateRef<any>;

  constructor() { }

  ngAfterContentInit() {
    const selectedTab = this.tabs.find(tab=> tab.selected);

    if(!selectedTab && this.tabs.first){
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: CsfTabComponent){
    this.tabs.forEach(tab=> tab.selected = false);

    tab.selected = true;
  }

  get tabContext(){
    return{
      tabs: this.tabs
    }
  }
}

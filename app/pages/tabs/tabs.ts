import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {SettingPage} from '../setting/setting';
import {UserCenter} from '../usercenter/usercenter';

import {Tabs} from 'ionic-angular';
import {Injectable,ViewChild} from '@angular/core';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})

export class TabsPage {

  @ViewChild('mainTabs') tabRef:Tabs;

  private tab1Root:any;
  private tab2Root:any;
  private tab3Root:any;
  private tab4Root:any;

  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = UserCenter;
    this.tab4Root = SettingPage;
  }

  ionViewDidEnter() {
    if (JSON.parse(localStorage.getItem("doLogin"))) {
      this.tabRef.select(0);
    } else {
      this.tabRef.select(2);
    }
  }

}

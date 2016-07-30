import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Geolocation} from 'ionic-native';
import {LocalNotifications} from 'ionic-native';
import {CityList} from './pages/city-list/city-list';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  @ViewChild(Nav) nav:Nav;
  public rootPage:any = TabsPage;
  public pages:Array<{title: string, component: any}>;

  constructor(private platform:Platform, private menu:MenuController) {
    this.menu.close();
    //本地推送功能
    platform.ready().then(() => {
      StatusBar.styleDefault();
      LocalNotifications.schedule({
        text: "大哥你家的猪跑出去了！快点追回来！",
        at: new Date(new Date().getTime() + 10000)
      });
    });
    //平台加载好之后设置bar样式
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
    // set our app's pages
    this.pages = [
      {title: '首页', component: TabsPage},
      {title: '城市列表', component: CityList}
    ];
  }

  /*页面切换*/
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);

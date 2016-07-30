"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var tabs_1 = require('./pages/tabs/tabs');
var ionic_native_2 = require('ionic-native');
var city_list_1 = require('./pages/city-list/city-list');
var MyApp = (function () {
    function MyApp(platform, menu) {
        this.platform = platform;
        this.menu = menu;
        this.rootPage = tabs_1.TabsPage;
        this.menu.close();
        //本地推送功能
        platform.ready().then(function () {
            ionic_native_1.StatusBar.styleDefault();
            ionic_native_2.LocalNotifications.schedule({
                text: "大哥你家的猪跑出去了！快点追回来！",
                at: new Date(new Date().getTime() + 10000)
            });
        });
        //平台加载好之后设置bar样式
        this.platform.ready().then(function () {
            ionic_native_1.StatusBar.styleDefault();
        });
        // set our app's pages
        this.pages = [
            { title: '首页', component: tabs_1.TabsPage },
            { title: '城市列表', component: city_list_1.CityList }
        ];
    }
    /*页面切换*/
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav)
    ], MyApp.prototype, "nav");
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'build/app.html'
        })
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
ionic_angular_1.ionicBootstrap(MyApp);
//# sourceMappingURL=app.js.map
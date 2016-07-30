"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var home_1 = require('../home/home');
var about_1 = require('../about/about');
var setting_1 = require('../setting/setting');
var usercenter_1 = require('../usercenter/usercenter');
var core_2 = require('@angular/core');
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = home_1.HomePage;
        this.tab2Root = about_1.AboutPage;
        this.tab3Root = usercenter_1.UserCenter;
        this.tab4Root = setting_1.SettingPage;
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        if (JSON.parse(localStorage.getItem("doLogin"))) {
            this.tabRef.select(0);
        }
        else {
            this.tabRef.select(2);
        }
    };
    __decorate([
        core_2.ViewChild('mainTabs')
    ], TabsPage.prototype, "tabRef");
    TabsPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/tabs/tabs.html'
        })
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
//# sourceMappingURL=tabs.js.map
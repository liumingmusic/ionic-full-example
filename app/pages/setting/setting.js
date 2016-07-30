"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SettingPage = (function () {
    function SettingPage(navController, http) {
        this.navController = navController;
        this.http = http;
        this.map = {
            face: null
        };
        this.http = http;
        //初始化方法
        this.getMap();
    }
    SettingPage.prototype.getMap = function () {
        var w = window.innerWidth;
        var h = window.innerHeight;
        this.map.face =
            "http://restapi.amap.com/v3/staticmap?" +
                "location=104.06667,30.66667&" +
                "scale=2&" +
                "zoom=14&" +
                "size=" + w + "*" + h + "&" +
                "traffic=1&" +
                "markers=mid,,A:116.481485,39.990464&" +
                "key=ee95e52bf08006f63fd29bcfbcf21df0";
    };
    SettingPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/setting/setting.html'
        })
    ], SettingPage);
    return SettingPage;
}());
exports.SettingPage = SettingPage;
//# sourceMappingURL=setting.js.map
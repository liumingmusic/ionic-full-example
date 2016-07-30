"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by liumingming on 16/7/25.
 */
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var contact_1 = require('../contact/contact');
var UserCenter = (function () {
    function UserCenter(nav) {
        var _this = this;
        this.nav = nav;
        this.user = {
            imageFace: 'images/1.jpg'
        };
        this.nav = nav;
        //判断用户是否登陆
        if (JSON.parse(localStorage.getItem("doLogin"))) {
            //已经登陆的状态
            this.user.imageFace = localStorage.getItem("imageFace");
        }
        else {
            //没有登陆,打开登陆界面
            var modal = ionic_angular_1.Modal.create(contact_1.ContactPage);
            modal.onDismiss(function (data) {
                _this.user.imageFace = data;
            });
            this.nav.present(modal);
        }
    }
    //退出
    UserCenter.prototype.doExit = function () {
        var _this = this;
        localStorage.clear();
        //没有登陆,打开登陆界面
        var modal = ionic_angular_1.Modal.create(contact_1.ContactPage);
        modal.onDismiss(function (data) {
            _this.user.imageFace = data;
        });
        this.nav.present(modal);
    };
    UserCenter = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/usercenter/usercenter.html'
        })
    ], UserCenter);
    return UserCenter;
}());
exports.UserCenter = UserCenter;
//# sourceMappingURL=usercenter.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var register_1 = require('../register/register');
var ContactPage = (function () {
    function ContactPage(navController, viewController, http) {
        this.navController = navController;
        this.viewController = viewController;
        this.http = http;
        this.user = {
            username: "1",
            password: ""
        };
        this.navController = navController;
        this.viewController = viewController;
        this.http = http;
    }
    /**
     * 用户登录信息
     */
    ContactPage.prototype.doLogin = function () {
        var _this = this;
        //用户登录信息验证
        if (!this.user.username) {
            var toastUserName = ionic_angular_1.Toast.create({
                message: '登录名称不能为空',
                duration: 1000,
                position: 'bottom'
            });
            this.navController.present(toastUserName);
        }
        else if (!this.user.password) {
            var toastPass = ionic_angular_1.Toast.create({
                message: '登录密码不能为空',
                duration: 1000,
                position: 'bottom'
            });
            this.navController.present(toastPass);
        }
        else {
            //模拟登陆效果
            this.http.get("http://rap.taobao.org/mockjs/5875/ionic/doLogin/"
                + this.user.username + "/"
                + this.user.password)
                .subscribe(function (data) {
                var json = JSON.parse(data["_body"]);
                if (!json.hasOwnProperty("isOk")) {
                    //登录信息
                    var loading = ionic_angular_1.Loading.create({
                        content: '正在登录...',
                        spinner: "bubbles"
                    });
                    _this.navController.present(loading);
                    //保存数据信息
                    localStorage.setItem("username", json.username);
                    localStorage.setItem("role", json.role);
                    localStorage.setItem("imageFace", json.imageFace);
                    localStorage.setItem("doLogin", JSON.stringify(true));
                    setTimeout(function () {
                        _this.viewController.dismiss(json.imageFace); //当前页面自身隐藏，展示出tabs页面
                        loading.dismiss();
                    }, 1000);
                }
                else {
                    var errorLogin = ionic_angular_1.Toast.create({
                        message: '用户名或密码错误',
                        duration: 1000,
                        position: 'bottom'
                    });
                    _this.navController.present(errorLogin);
                }
            });
        }
    };
    ContactPage.prototype.doRegister = function () {
        var modal = ionic_angular_1.Modal.create(register_1.RegisterPage);
        this.navController.present(modal);
    };
    ContactPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/contact/contact.html'
        })
    ], ContactPage);
    return ContactPage;
}());
exports.ContactPage = ContactPage;
//# sourceMappingURL=contact.js.map
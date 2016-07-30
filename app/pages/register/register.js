"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by liumingming on 16/7/24.
 */
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var ionic_native_2 = require('ionic-native');
var RegisterPage = (function () {
    function RegisterPage(navController, viewController) {
        this.navController = navController;
        this.viewController = viewController;
        this.user = {
            username: "",
            password: "",
            sex: '0',
            birthDay: "1990-01-10",
            personImg: 'images/1.jpg'
        };
        this.navController = navController;
        this.viewController = viewController;
    }
    /**
     *头像使用拍照还是用图片库
     */
    RegisterPage.prototype.checkPhoto = function () {
        var _this = this;
        var actionSheet = ionic_angular_1.ActionSheet.create({
            buttons: [
                {
                    text: '选取图片',
                    handler: function () {
                        _this.checkImg();
                    }
                }, {
                    text: '拍照',
                    handler: function () {
                        _this.takePhoto();
                    }
                }, {
                    text: '取消',
                    role: 'cancel'
                }
            ]
        });
        this.navController.present(actionSheet);
    };
    //拍照
    RegisterPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
            quality: 100,
            destinationType: ionic_native_2.Camera.DestinationType.FILE_URI,
            sourceType: ionic_native_2.Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: ionic_native_2.Camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 200,
            mediaType: 0,
            cameraDirection: 0,
            saveToPhotoAlbum: true //保存进手机相册
        };
        ionic_native_2.Camera.getPicture(options).then(function (imageData) {
            _this.user.personImg = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    //选取头像
    RegisterPage.prototype.checkImg = function () {
        var _this = this;
        var options = { maximumImagesCount: 1 };
        ionic_native_1.ImagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.user.personImg = results[i];
            }
        });
    };
    //用户注册
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        var loading = ionic_angular_1.Loading.create({
            content: '正在注册...',
            duration: 5000,
            spinner: "bubbles"
        });
        this.navController.present(loading);
        setTimeout(function () {
            _this.dismiss();
        }, 5000);
    };
    //返回登录界面
    RegisterPage.prototype.dismiss = function () {
        this.viewController.dismiss();
    };
    RegisterPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/register/register.html'
        })
    ], RegisterPage);
    return RegisterPage;
}());
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=register.js.map
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
var ionic_native_1 = require('ionic-native');
var DescriptionPage = (function () {
    //初始化加载方法
    function DescriptionPage(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
        this.img = {
            url: 'images/1.jpg'
        };
        //之前页面传过来的参数
        this.item = navParams.data.params;
    }
    DescriptionPage.prototype.doPhotograph = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            saveToPhotoAlbum: true
        };
        ionic_native_1.Camera.getPicture(options).then(function (imageData) {
            var base64Image = "data:image/jpeg;base64," + imageData;
            console.log(base64Image);
            _this.img.url = base64Image;
        }, function (err) {
            console.log(err);
        });
    };
    DescriptionPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/description/description.html'
        })
    ], DescriptionPage);
    return DescriptionPage;
}());
exports.DescriptionPage = DescriptionPage;
//# sourceMappingURL=description.js.map
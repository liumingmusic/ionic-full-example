"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var AboutPage = (function () {
    function AboutPage(navController) {
        this.navController = navController;
        this.list = this.getData();
    }
    //点击列表项数据信息
    AboutPage.prototype.openMsg = function (event, item) {
        var actionSheet = ionic_angular_1.ActionSheet.create({
            title: '拨打电话',
            buttons: [
                {
                    text: item.tel,
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.navController.present(actionSheet);
    };
    //删除数据
    AboutPage.prototype.delUser = function (event, id) {
        for (var i = 0; i < this.list.length; i++) {
            if (id === this.list[i].id) {
                this.list.splice(i, 1);
            }
        }
    };
    //置顶
    AboutPage.prototype.setTop = function (event, id) {
        for (var i = 0; i < this.list.length; i++) {
            if (id === this.list[i].id) {
                this.list.unshift(this.list[i]);
                this.list.splice(i + 1, 1); //删除数据
                break;
            }
        }
    };
    //获取模拟数据信息
    AboutPage.prototype.getData = function () {
        var list = [];
        list.push({
            id: '0',
            img: 'images/1.jpg',
            name: '刘明明',
            description: '我今天捡了一块钱',
            date: '下午2:30',
            tel: '13468833656'
        });
        list.push({
            id: '2',
            img: 'images/2.jpg',
            name: '王东江',
            description: '马上要毕业了！',
            date: '上午11:30',
            tel: '13468863986'
        });
        list.push({
            id: '3',
            img: 'images/3.jpg',
            name: '罗春斌',
            description: '这次的工作我很满意',
            date: '上11:20',
            tel: '13468633986'
        });
        list.push({
            id: '4',
            img: 'images/4.jpg',
            name: '钟值',
            description: '恋爱很累',
            date: '上午10:30',
            tel: '13466833986'
        });
        list.push({
            id: '5',
            img: 'images/5.jpg',
            name: '王志奇',
            description: '我要好好学习ionic',
            date: '上午8:30',
            tel: '1338833986'
        });
        list.push({
            id: '6',
            img: 'images/6.jpg',
            name: '李诗琪',
            description: 'java开发不错',
            date: '上11:20',
            tel: '13412833986'
        });
        list.push({
            id: '7',
            img: 'images/c1.jpg',
            name: '钱雪琪',
            description: '恋爱很累',
            date: '上午10:30',
            tel: '13128833986'
        });
        list.push({
            id: '8',
            img: 'images/c2.jpg',
            name: '王子奇',
            description: '我要好好学习ionic',
            date: '上午8:30',
            tel: '13468833686'
        });
        return list;
    };
    AboutPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/about/about.html'
        })
    ], AboutPage);
    return AboutPage;
}());
exports.AboutPage = AboutPage;
//# sourceMappingURL=about.js.map
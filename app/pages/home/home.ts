import {Component} from '@angular/core';
import {NavController,MenuController} from 'ionic-angular';
import {DescriptionPage} from '../description/description';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  params = [];
  public list = this.getData();

  constructor(private navController:NavController, private menu:MenuController) {
  }

  //进入信息的详细界面
  goDescription(obj) {
    this.navController.push(DescriptionPage, {params: obj});
  }

  //下拉刷新
  doRefresh(refresher) {
    setTimeout(() => {
      this.list = this.list.concat(this.getData()).sort(function(){
        return Math.random()>.5 ? -1 : 1;
      });
      refresher.complete();
    }, 5000);
  }

  //获取数据
  getData() {
    let list = [];
    list.push({
      img: "images/d1.png",
      title: "男子南非旅行偶遇狮子",
      desc: "据英国《每日邮报》 7月20日报道,一名去南非禁猎保护区旅行的男子埃里克(EricUbisi)",
      start: '98'
    });
    list.push({
      img: "images/d2.png",
      title: "1女教师中1.29亿",
      desc: "近日苏格兰一位女教师,在与丈夫庆祝结婚25周年之际,发现自己的彩票命中了1467万英镑",
      start: '28'
    });
    list.push({
      img: "images/d3.png",
      title: "不玩游戏被扣薪水",
      desc: "随着科技发展,社会工种也越来越多,这两天,北京的大雨一直在下。",
      start: '15'
    });
    list.push({
      img: "images/d4.png",
      title: "河北邢台遭洪灾",
      desc: "王宝强身在外地拍戏,心系家乡河北邢台。22日,他发博表示,得知家乡被洪水淹没损失惨重无心工作。",
      start: '45'
    });
    return list;
  }


  /*onPageLoaded() {
   console.log("首页被加载了..");
   }

   onPageWillEnter() {
   console.log("首页将要进入..");
   }

   onPageDidEnter() {
   console.log("首页已经进入..");
   }

   onPageWillLeave() {
   console.log("首页将要离开..");
   }

   onPageDidLeave() {
   console.log("首页已经离开..");
   }*/
}

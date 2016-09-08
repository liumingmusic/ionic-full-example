import {Component} from '@angular/core';
import {NavController,ActionSheet} from 'ionic-angular';
@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class AboutPage {

  public list = this.getData();

  constructor(private navController:NavController) {

  }

  //点击列表项数据信息
  openMsg(event, item) {
    let actionSheet = ActionSheet.create({
      title: '拨打电话',
      buttons: [
        {
          text: item.tel,
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    this.navController.present(actionSheet);
  }

  //删除数据
  delUser(event, id) {
    for (var i = 0; i < this.list.length; i++) {
      if (id === this.list[i].id) {
        this.list.splice(i, 1);
      }
    }
  }

  //置顶
  setTop(event, id) {
    for (var i = 0; i < this.list.length; i++) {
      if (id === this.list[i].id) {
        this.list.unshift(this.list[i]);
        this.list.splice(i + 1, 1);//删除数据
        break;
      }
    }
  }

  //上滑加载数据信息
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.list = this.list.concat(this.getData());
      if (this.list.length >= 100) {
        infiniteScroll.enable(false);
      } else {
        infiniteScroll.complete();
      }
    }, 3000);
  }

  //获取模拟数据信息
  getData() {
    let list = [];
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
      img: 'images/8.png',
      name: '王子奇',
      description: '我要好好学习ionic',
      date: '上午8:30',
      tel: '13468833686'
    });
    list.push({
      id: '9',
      img: 'images/9.png',
      name: '和震撼',
      description: 'typexcript',
      date: '上午8:30',
      tel: '13468833686'
    });
    list.push({
      id: '10',
      img: 'images/10.png',
      name: '不是气',
      description: 'anualrjs',
      date: '上午8:30',
      tel: '13468833686'
    });
    list.push({
      id: '11',
      img: 'images/11.png',
      name: '王子奇',
      description: '我要好好学习ionic',
      date: '上午8:30',
      tel: '13468833686'
    });
    list.push({
      id: '12',
      img: 'images/13.png',
      name: '王子奇',
      description: '我要好好学习ionic',
      date: '上午8:30',
      tel: '13468833686'
    });
    list.push({
      id: '13',
      img: 'images/13.png',
      name: '王子奇',
      description: '我要好好学习ionic',
      date: '上午8:30',
      tel: '13468833686'
    });
    return list;
  }
}

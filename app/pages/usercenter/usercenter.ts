/**
 * Created by liumingming on 16/7/25.
 */
import {Component} from '@angular/core';
import {NavController, Loading, Alert, Toast, Modal} from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/usercenter/usercenter.html'
})
export class UserCenter {

  public user = {
    imageFace: 'images/1.jpg'
  };

  constructor(private nav:NavController) {
    this.nav = nav;
    //判断用户是否登陆
    if (JSON.parse(localStorage.getItem("doLogin"))) {
      //已经登陆的状态
      this.user.imageFace = localStorage.getItem("imageFace");
    } else {
      //没有登陆,打开登陆界面
      let modal = Modal.create(LoginPage);
      modal.onDismiss(data => {
        this.user.imageFace = data;
      });
      this.nav.present(modal);
    }
  }

  //退出
  doExit() {
    localStorage.clear();
    //没有登陆,打开登陆界面
    let modal = Modal.create(LoginPage);
    modal.onDismiss(data => {
      this.user.imageFace = data;
    });
    this.nav.present(modal);
  }

}

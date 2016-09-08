import {Component} from '@angular/core';
import {NavController, ViewController, Loading, Alert, Toast, Modal} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {Http} from '@angular/http';
@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  public user = {
    username: "1",
    password: ""
  };

  constructor(public navController:NavController, public viewController:ViewController, private http:Http) {
    this.navController = navController;
    this.viewController = viewController;
    this.http = http;
  }

  /**
   * 用户登录信息
   */
  doLogin() {
    //用户登录信息验证
    if (!this.user.username) {
      let toastUserName = Toast.create({
        message: '登录名称不能为空',
        duration: 1000,
        position: 'bottom'
      });
      this.navController.present(toastUserName);
    } else if (!this.user.password) {
      let toastPass = Toast.create({
        message: '登录密码不能为空',
        duration: 1000,
        position: 'bottom'
      });
      this.navController.present(toastPass);
    } else {
      //模拟登陆效果
      this.http.get("http://rap.taobao.org/mockjs/5875/ionic/doLogin/"
        + this.user.username + "/"
        + this.user.password)
        .subscribe(data => {
          let json = JSON.parse(data["_body"]);
          if (!json.hasOwnProperty("isOk")) {
            //登录信息
            var loading = Loading.create({
              content: '正在登录...',
              spinner: "bubbles"
            });
            this.navController.present(loading);
            //保存数据信息
            localStorage.setItem("username", json.username);
            localStorage.setItem("role", json.role);
            localStorage.setItem("imageFace", json.imageFace);
            localStorage.setItem("doLogin", JSON.stringify(true));
            setTimeout(() => {
              this.viewController.dismiss(json.imageFace);//当前页面自身隐藏，展示出tabs页面
              loading.dismiss();
            }, 1000);
          } else {
            let errorLogin = Toast.create({
              message: '用户名或密码错误',
              duration: 1000,
              position: 'bottom'
            });
            this.navController.present(errorLogin);
          }
        });
    }
  }

  doRegister() {
    let modal = Modal.create(RegisterPage);
    this.navController.present(modal);
  }
}

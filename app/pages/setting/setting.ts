import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from '@angular/http';

@Component({
  templateUrl: 'build/pages/setting/setting.html'
})
export class SettingPage {

  public map = {
    face: null
  };

  constructor(private navController:NavController, private http:Http) {
    this.http = http;
    //初始化方法
    this.getMap();
  }

  getMap() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.map.face =
      "http://restapi.amap.com/v3/staticmap?" +
      "location=104.06667,30.66667&" +
      "scale=2&" +
      "zoom=14&" +
      "size=" + w + "*" + h + "&" +
      "traffic=1&" +
      "markers=mid,,A:116.481485,39.990464&" +
      "key=ee95e52bf08006f63fd29bcfbcf21df0";
  }
}

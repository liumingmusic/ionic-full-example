/**
 * Created by liumingming on 16/7/24.
 */
import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/description/description.html'
})
export class DescriptionPage {

  public img = {
    url: 'images/1.jpg'
  };

  item;

  //初始化加载方法
  constructor(private navController:NavController, private navParams:NavParams) {
    //之前页面传过来的参数
    this.item = navParams.data.params;
  }

  doPhotograph() {
    let options = {
      quality: 100,
      allowEdit: true,
      saveToPhotoAlbum: true
    };
    Camera.getPicture(options).then((imageData) => {
      let base64Image = "data:image/jpeg;base64," + imageData;
      console.log(base64Image);
      this.img.url = base64Image;
    }, (err) => {
      console.log(err);
    });
  }
}

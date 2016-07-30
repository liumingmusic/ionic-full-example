/**
 * Created by liumingming on 16/7/24.
 */
import {Component} from '@angular/core';
import {NavController, ViewController, Loading, ActionSheet} from 'ionic-angular';
import {ImagePicker} from 'ionic-native';
import {Camera} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/register/register.html'
})
export class RegisterPage {

  public user = {
    username: "",
    password: "",
    sex: '0',
    birthDay: "1990-01-10",
    personImg: 'images/1.jpg'
  };

  constructor(private navController:NavController, private viewController:ViewController) {
    this.navController = navController;
    this.viewController = viewController;
  }

  /**
   *头像使用拍照还是用图片库
   */
  checkPhoto() {
    let actionSheet = ActionSheet.create({
      buttons: [
        {
          text: '选取图片',
          handler: () => {
            this.checkImg();
          }
        }, {
          text: '拍照',
          handler: () => {
            this.takePhoto();
          }
        }, {
          text: '取消',
          role: 'cancel'
        }
      ]
    });
    this.navController.present(actionSheet);
  }

  //拍照
  takePhoto() {
    let options = {
      //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
      quality: 100,                                            //相片质量0-100
      destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
      sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
      allowEdit: false,                                        //在选择之前允许修改截图
      encodingType: Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
      targetWidth: 200,                                        //照片宽度
      targetHeight: 200,                                       //照片高度
      mediaType: 0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
      cameraDirection: 0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
      saveToPhotoAlbum: true                                   //保存进手机相册
    };
    Camera.getPicture(options).then((imageData) => {
      this.user.personImg = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  //选取头像
  checkImg() {
    let options = {maximumImagesCount: 1};
    ImagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.user.personImg = results[i];
      }
    });
  }

  //用户注册
  doRegister() {
    let loading = Loading.create({
      content: '正在注册...',
      duration: 5000,
      spinner: "bubbles"
    });
    this.navController.present(loading);
    setTimeout(() => {
      this.dismiss();
    }, 5000);
  }

  //返回登录界面
  dismiss() {
    this.viewController.dismiss();
  }
}

import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import {BaiduMap, OfflineOptions, ControlAnchor, NavigationControlType} from 'angular2-baidu-map';

@Component({
    templateUrl: 'build/pages/setting/setting.html',
    directives: [BaiduMap]
})
export class SettingPage implements OnInit{

  opts: any;
  offlineOpts: OfflineOptions;

  constructor(private navController:NavController, private http:Http) {
    this.http = http;
  }

  ngOnInit() {

    this.opts = {
      center: {
         longitude: 104.506191,
         latitude: 30.245554
      },
      zoom: 17,
      city: "成都",
      markers: [{
         longitude: 104.506191,
         latitude: 30.245554
      }],
      geolocationCtrl: {
         /*定位的小图标*/
         anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
      },
      scaleCtrl: {
         anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
      },
      overviewCtrl: {
         isOpen: false
      },
      navCtrl: {
          type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
      }
    };

    this.offlineOpts = {
       retryInterval: 5000,
       txt: 'NO-NETWORK'
    };
  }

  loadMap(map: any) {
    console.log('map instance here', map);
  }

  clickMarker(event){
    console.log('The clicked marker is', event);
  }
}

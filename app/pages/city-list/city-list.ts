/**
 * Created by liumingming on 16/7/24.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/city-list/city-list.html'
})
export class CityList {

  constructor(private nav:NavController) {
    this.nav = nav;
  }

}

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactPage} from '../contact/contact';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  items = new Array(20);
  constructor(private navCtrl: NavController) {

  }

  pushPages(i) {
    let pagesToPush = []
    for(let x=0;x<=i;x++) {
      pagesToPush.push({page: ContactPage})
    }

    this.navCtrl.insertPages(this.navCtrl.length(), pagesToPush);
  }
}

import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  pageNumber;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }
  ionViewLoaded () {
    this.pageNumber = this.navParams.get('pageNumber');
  }
}

import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, Nav} from 'ionic-angular';
import {StatusBar, Deeplinks} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;
  @ViewChild(Nav) navChild: Nav;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  ngAfterViewInit() {
  this.platform.ready().then(() => {

    // Convenience to route with a given nav
    Deeplinks.routeWithNavController(this.navChild, {
      '/reset/:token': TabsPage
    }).subscribe((match) => {
      console.log('Successfully routed', match);
    }, (nomatch) => {
      console.warn('Unmatched Route', Object.keys(nomatch.$link)[3]);

      console.warn('Unmatched Route', nomatch.$link.url);
      console.warn('Unmatched Route', nomatch.$link.path);
      console.warn('Unmatched Route', nomatch.$link.schema);
    }, () => console.log('DOne'));
  });
}
}

ionicBootstrap(MyApp);

import { Component } from '@angular/core';



import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { CallLog } from '@ionic-native/call-log/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Linea',
      url: '/linea',
      icon: 'car'
    },
    {
      title: 'Dog Food',
      url: '/dogfood',
      icon: 'dog'
    },
    {
      title: 'Gas',
      url: '/gas',
      icon: 'gas'
    },
    {
      title: 'Dolar',
      url: '/dolar',
      icon: 'logo-usd'
    },    
    {
      title: 'NO55',
      url: '/llamadas',
      icon: 'logo-usd'
    },      
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

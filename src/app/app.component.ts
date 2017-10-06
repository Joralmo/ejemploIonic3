import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from './../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private afAuth:AngularFireAuth,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      const authObserver = this.afAuth.authState.subscribe(data => {
        splashScreen.hide();
        if(data && data.email && data.uid){
          this.rootPage = HomePage;
          authObserver.unsubscribe();
        }else{
          this.rootPage = LoginPage;
          authObserver.unsubscribe();
        }
      })

    });
  }
}


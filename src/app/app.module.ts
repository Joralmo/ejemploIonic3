import { EditarItemPage } from './../pages/editar-item/editar-item';
import { RegistroPage } from './../pages/registro/registro';
import { NuevoItemPage } from './../pages/nuevo-item/nuevo-item';
import { DetalleItemPage } from './../pages/detalle-item/detalle-item';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const configFirebase = {
  apiKey: "AIzaSyDZEYW94vKbwm0GDOnRO3hTK1hAg_JWZ5s",
  authDomain: "mvp-ionic-bf833.firebaseapp.com",
  databaseURL: "https://mvp-ionic-bf833.firebaseio.com",
  projectId: "mvp-ionic-bf833",
  storageBucket: "",
  messagingSenderId: "208329950851"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DetalleItemPage,
    NuevoItemPage,
    RegistroPage,
    EditarItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(configFirebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DetalleItemPage,
    NuevoItemPage,
    RegistroPage,
    EditarItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

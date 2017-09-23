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

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

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
    IonicModule.forRoot(MyApp)
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

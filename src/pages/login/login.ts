import { User } from './../../models/user.interface';
import { HomePage } from './../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegistroPage } from './../registro/registro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import * as firebase from 'firebase/app';

/**
 * Generated;

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(private alerta: AlertController,private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    if(user.email != null && user.password != null){
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then((result) => {
        console.log(result.uid);
        if(result){
          this.navCtrl.setRoot(HomePage);
        }
      }, (error) => {
        this.alerta.create({
          title: error.name,
          subTitle: error.message,
          buttons:['Ok']
        }).present()
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logearConFacebook(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((result)=>{
      console.log(result);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
    }, (error) => {
      this.alerta.create({
        title: error.name,
        subTitle: error.message,
        buttons:['Ok']
      }).present();
    })
  }

  irAlRegistro(){
    this.navCtrl.push(RegistroPage);
  }

}

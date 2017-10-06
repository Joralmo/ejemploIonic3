import { HomePage } from './../home/home';
import { User } from './../../models/user.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  user = {} as User;
  constructor(private alerta:AlertController,private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  async registro(user: User){
    if(user.email != null && user.password != null){
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then((result) => {
        console.log(result.uid);
        if(result){
          this.navCtrl.setRoot(HomePage);
        }
      }, (error) => {
        this.alerta.create({
          title:'Error',
          subTitle:'Ingresar Email y Contraseña',
          buttons: ['Ok']
        }).present();
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}

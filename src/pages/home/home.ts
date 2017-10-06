import { StatusBar } from '@ionic-native/status-bar';
import { Item } from './../../models/item.interface';
import { EditarItemPage } from './../editar-item/editar-item';
import { DetalleItemPage } from './../detalle-item/detalle-item';
import { NuevoItemPage } from './../nuevo-item/nuevo-item';
import { RegistroPage } from './../registro/registro';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //item:Item;
  itemRef$: FirebaseListObservable<Item[]>;
  items:Array<{titulo: string,descripcion:string}>;
  nombre:string;

  constructor(public navCtrl: NavController, private statusBar: StatusBar, private fbDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.itemRef$ = this.fbDB.list('item-list');
    //this.items = [{titulo:'El super producto 1', descripcion:'Esta es la descripcion del super producto 1'}, {titulo:'El super producto 2', descripcion:'Esta es la descripcion del super producto 2'}, {titulo:'El super producto 3', descripcion:'Esta es la descripcion del super producto 3'}]
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#ffffff');
    const authObserver = this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.nombre=data.displayName;
      }else{
        this.navCtrl.setRoot(LoginPage);
        authObserver.unsubscribe();
      }
    });
  }

  itemClick(item: Item){
    this.navCtrl.push(DetalleItemPage, {itemId: item.$key, titulo:item.itemTitulo, descripcion:item.itemDescripcion});
  }

  irAlLogin(){
    this.navCtrl.push(LoginPage);
  }
  irAlRegistro(){
    this.navCtrl.push(RegistroPage);
  }

  logOut(){
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  nuevoItem(){
    this.navCtrl.push(NuevoItemPage);
  }
  verItem(){
    this.navCtrl.push(DetalleItemPage);
  }
  editarItem(){
    this.navCtrl.push(EditarItemPage);
  }

}

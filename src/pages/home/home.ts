import { StatusBar } from '@ionic-native/status-bar';
import { Item } from './../../models/item.interface';
import { EditarItemPage } from './../editar-item/editar-item';
import { DetalleItemPage } from './../detalle-item/detalle-item';
import { NuevoItemPage } from './../nuevo-item/nuevo-item';
import { RegistroPage } from './../registro/registro';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  item:Item;
  items:Array<{titulo: string,descripcion:string}>;

  constructor(public navCtrl: NavController, private statusBar: StatusBar) {
    this.items = [{titulo:'El super producto 1', descripcion:'Esta es la descripcion del super producto 1'}, 
                  {titulo:'El super producto 2', descripcion:'Esta es la descripcion del super producto 2'},
                  {titulo:'El super producto 3', descripcion:'Esta es la descripcion del super producto 3'}]
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  itemClick(item){
    this.navCtrl.push(DetalleItemPage, {titulo:item.titulo,descripcion:item.descripcion});
  }

  irAlLogin(){
    this.navCtrl.push(LoginPage);
  }
  irAlRegistro(){
    this.navCtrl.push(RegistroPage);
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

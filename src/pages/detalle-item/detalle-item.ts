import { EditarItemPage } from './../editar-item/editar-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-item',
  templateUrl: 'detalle-item.html',
})
export class DetalleItemPage {
  itemTitulo:string;
  itemDescripcion:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemTitulo = navParams.get('titulo');
    this.itemDescripcion = navParams.get('descripcion');
  }

  editarItem(){
    this.navCtrl.push(EditarItemPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleItemPage');
  }

}

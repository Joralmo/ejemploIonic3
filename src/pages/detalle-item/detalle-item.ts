import { EditarItemPage } from './../editar-item/editar-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../models/item.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

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
  itemId:string;
  item = {} as Item;
  itemRef$: FirebaseListObservable<Item[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private fbDB: AngularFireDatabase) {
    this.itemTitulo = navParams.get('titulo');
    this.itemDescripcion = navParams.get('descripcion');
    this.itemId = navParams.get('itemId');

    this.itemRef$ = this.fbDB.list('item-list');
  }

  editarItem(){
    this.navCtrl.push(EditarItemPage, {itemId: this.itemId, titulo: this.itemTitulo, descripcion: this.itemDescripcion});
  }

  eliminarItem(){
    this.itemRef$.remove(this.itemId);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleItemPage');
  }



}

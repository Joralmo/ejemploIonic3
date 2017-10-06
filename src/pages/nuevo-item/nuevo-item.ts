import { Component } from '@angular/core';
import { Item } from './../../models/item.interface';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

/**
 * Generated class for the NuevoItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-item',
  templateUrl: 'nuevo-item.html',
})
export class NuevoItemPage {

  item={} as Item;
  itemRef$: FirebaseListObservable<Item[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fbDB: AngularFireDatabase) {
    this.itemRef$ = this.fbDB.list('item-list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoItemPage');
  }

  agregarItem(item: Item){
    this.itemRef$.push({
      itemTitulo: item.itemTitulo,
      itemDescripcion: item.itemDescripcion
    })
    this.item = {} as Item;
    this.navCtrl.pop();
  }

}

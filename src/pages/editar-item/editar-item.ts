import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../models/item.interface';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the EditarItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-item',
  templateUrl: 'editar-item.html',
})
export class EditarItemPage {

  itemSubscription: Subscription;
  itemRef$: FirebaseObjectObservable<Item>;
  item = {} as Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fbDB: AngularFireDatabase) {
    const itemId = this.navParams.get('itemId');
    this.itemRef$ = this.fbDB.object(`item-list/${itemId}`);
    this.itemSubscription = this.itemRef$.subscribe(item => this.item = item);
  }

  editarItem(item: Item){
    this.itemRef$.update(item);
    this.navCtrl.remove(2,1);
    this.navCtrl.pop();
  }

  ionViewWillLeave(){
    this.itemSubscription.unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarItemPage');
  }

}

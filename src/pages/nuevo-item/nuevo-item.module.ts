import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoItemPage } from './nuevo-item';

@NgModule({
  declarations: [
    NuevoItemPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoItemPage),
  ],
})
export class NuevoItemPageModule {}

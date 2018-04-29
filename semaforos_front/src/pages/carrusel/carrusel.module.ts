import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarruselPage } from './carrusel';

@NgModule({
  declarations: [
    CarruselPage,
  ],
  imports: [
    IonicPageModule.forChild(CarruselPage),
  ],
})
export class CarruselPageModule {}

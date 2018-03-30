import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleAmbulanciaPage } from './detalle-ambulancia';

@NgModule({
  declarations: [
    DetalleAmbulanciaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleAmbulanciaPage),
  ],
})
export class DetalleAmbulanciaPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleSemaforoPage } from './detalle-semaforo';

@NgModule({
  declarations: [
    DetalleSemaforoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleSemaforoPage),
  ],
})
export class DetalleSemaforoPageModule {}

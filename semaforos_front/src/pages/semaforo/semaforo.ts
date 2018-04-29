import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalleSemaforoPage } from '../detalle-semaforo/detalle-semaforo';

/**
 * Generated class for the SemaforoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-semaforo',
  templateUrl: 'semaforo.html',
})
export class SemaforoPage {

  semaforos = [0,0,0,0];
  detalle:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SemaforoPage');
    this.detalle = DetalleSemaforoPage;
  }

}

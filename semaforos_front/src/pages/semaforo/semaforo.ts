import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
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

  semaforos: any[];
  detalle:any;
  url = 'http://localhost:8000/'

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.http.get(this.url + 'semaforos/').subscribe((data: any[]) =>{
      this.semaforos = data
      console.log(this.semaforos)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SemaforoPage');
    this.detalle = DetalleSemaforoPage;
  }

}

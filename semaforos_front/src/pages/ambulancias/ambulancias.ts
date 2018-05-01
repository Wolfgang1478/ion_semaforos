import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalleAmbulanciaPage } from '../detalle-ambulancia/detalle-ambulancia';
import { HttpClient } from '@angular/common/http'
/**
 * Generated class for the AmbulanciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ambulancias',
  templateUrl: 'ambulancias.html',
})
export class AmbulanciasPage {

  detalle:any;
  ambulancias: any[];
  url = 'http://localhost:8000/'

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.http.get(this.url + 'ambulancias/').subscribe((data: any[]) => {
      this.ambulancias = data
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmbulanciasPage');
    this.detalle = DetalleAmbulanciaPage;
  }

  log(msg):void{
    console.log(msg);
  }

}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {} from '@types/googlemaps';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  @ViewChild('map') mapRef: ElementRef;
  mapa:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.mapRef);
    this.mostrarMapa();
  }

  mostrarMapa(){
    
    let ubicacion = new google.maps.LatLng(4.6324, -74.0655);
    let opciones = {
      center:ubicacion,
      zoom:15
    }
    this.mapa = new google.maps.Map(this.mapRef.nativeElement, opciones);
  }

  log(msg):void{
    console.log(msg);
  }

}

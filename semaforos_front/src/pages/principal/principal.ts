import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioPage } from '../usuario/usuario';
import { AmbulanciasPage } from '../ambulancias/ambulancias';
import { EmergenciasPage } from '../emergencias/emergencias';
import { SemaforoPage } from '../semaforo/semaforo';
import { CarruselPage } from '../carrusel/carrusel';
import { TabsPage } from '../tabs/tabs';

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
  usuario:any;
  ambulancia:any;
  emergencia:any;
  semaforo:any;
  carrusel:any
  tabs:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.mapRef);
    this.mostrarMapa();
    this.usuario = UsuarioPage;
    this.ambulancia = AmbulanciasPage;
    this.emergencia = EmergenciasPage;
    this.semaforo = SemaforoPage;
    this.carrusel = CarruselPage;
    this.tabs = TabsPage;
   }

  mostrarMapa(){

    let ubicacion = new google.maps.LatLng(4.6324, -74.0655);
    let opciones = {
      center:ubicacion,
      zoom:15
    }
    this.mapa = new google.maps.Map(this.mapRef.nativeElement, opciones);
  }

  pop(){
    this.navCtrl.popToRoot();
  }

  log(msg):void{
    console.log(msg);
  }

}

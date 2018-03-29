import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the CrearCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-cuenta',
  templateUrl: 'crear-cuenta.html',
})
export class CrearCuentaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public load:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuentaPage');
  }

  crearCuenta(email, pass1, pass2){
    if(pass1.value != pass2.value){
      alert('La contraseña no coincide, ingresela de nuevo');
    }else{
      this.cargando();
    }
  }

  cargando() {
    let loader = this.load.create({
      content: "Creando usuario...",
      duration: 3000
    });
    loader.present();
  }

}

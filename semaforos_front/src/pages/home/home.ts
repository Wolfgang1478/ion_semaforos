import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CrearCuentaPage } from '../crear-cuenta/crear-cuenta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  crear:any;

  constructor(public navCtrl: NavController, public load:LoadingController) {
    this.ionViewLoad();
    this.crear = CrearCuentaPage;
  }

  ionViewLoad(){
    setTimeout(() =>{
      this.splash = false;
    }, 4000);
  }

  iniciar(user, pass){
    console.log("El usuario " + user.value + " trato de iniciar sesion con la contraseña: " + pass.value);
    this.cargando();
  }

  cargando() {
    let loader = this.load.create({
      content: "Iniciando sesión...",
      duration: 3000
    });
    loader.present();
  }

}

import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CrearCuentaPage } from '../crear-cuenta/crear-cuenta';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  crear:any;
  principal:any;

  constructor(public navCtrl: NavController, public load:LoadingController) {
    this.ionViewLoad();
    this.crear = CrearCuentaPage;
    this.principal = PrincipalPage;
  }

  ionViewLoad(){
    setTimeout(() =>{
      this.splash = false;
    }, 4000);
  }

  iniciar(user, pass){
    console.log("El usuario " + user.value + " trato de iniciar sesion con la contraseña: " + pass.value);
    if(user.value == 'admin' && pass.value == 'adminadmin')
      this.cargando();
    else
      alert('usuario o contraseña invalidos');
  }

  cargando() {
    let loader = this.load.create({
      content: "Iniciando sesión...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(this.principal);
  }

}

import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;

  @ViewChild("user") user;
  @ViewChild("pass") pass;

  constructor(public navCtrl: NavController) {
    this.ionViewLoad();
  }

  ionViewLoad(){
    setTimeout(() =>{
      this.splash = false;
    }, 4000);
  }

  iniciar(){
    console.log("El usuario " + this.user.value + " trato de iniciar sesion con la contraseña: " + this.pass.value);
  }

}

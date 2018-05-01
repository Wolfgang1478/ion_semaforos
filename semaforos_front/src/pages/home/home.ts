import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CrearCuentaPage } from '../crear-cuenta/crear-cuenta';
import { PrincipalPage } from '../principal/principal';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  crear:any;
  principal:any;
  usuarios: any[]

  url = 'http://127.0.0.1:8000/'

  constructor(public navCtrl: NavController, public load:LoadingController, private http: HttpClient, private pop: AlertController) {
    this.ionViewLoad();
    this.crear = CrearCuentaPage;
    this.principal = PrincipalPage;
    this.http.get(this.url + 'usuarios/').subscribe((data: any[]) => {
      this.usuarios = data
      console.log(this.usuarios)
    })
  }

  presentAlert(titulo, cuerpo) {
    let alert = this.pop.create({
      title: titulo,
      subTitle: cuerpo,
      buttons: ['Cerrar']
    });
    alert.present();
  }

  ionViewLoad(){
    setTimeout(() =>{
      this.splash = false;
    }, 4000);
  }

  iniciar(user, pass){
    for(let i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].correo == user.value && this.usuarios[i].contrasena == pass.value){
        this.cargando()
      }else if(this.usuarios.length - 1 == i){
        this.presentAlert('Error', 'Usuario o contraseña incorrecta')
      }
    } 
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

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

  principal:any;
  companias: any[]
  url = 'http://localhost:8000/'

  constructor(public navCtrl: NavController, public navParams: NavParams, public load:LoadingController, private http: HttpClient, private pop: AlertController) {
    this.principal = PrincipalPage;
    this.http.get(this.url + 'companias/').subscribe((data: any[]) => {
      this.companias = data
    })
  }

  postUsuario(compania, email, pass){
    this.http.post(this.url + 'usuarios/', {
      compania: compania,
      correo: email.value,
      contrasena: pass.value
    }).subscribe((data: any[]) => {
      this.cargando()
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuentaPage');
  }

  log(msg):void{
    console.log(msg)
  }

  crearCuenta(compania, email, pass1, pass2){
    if(pass1.value != pass2.value){
      this.presentAlert('Error', 'Las contraseñas no coinciden')
    }else{
      this.postUsuario(compania.split('.')[0], email, pass1)
    }
  }

  presentAlert(titulo, cuerpo) {
    let alert = this.pop.create({
      title: titulo,
      subTitle: cuerpo,
      buttons: ['Cerrar']
    });
    alert.present();
  }

  cargando() {
    let loader = this.load.create({
      content: "Creando usuario...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(this.principal);
  }

}

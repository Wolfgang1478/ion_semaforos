import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alerta:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

  cambiarClave(actual, nueva1, nueva2){
    let auxAct = actual.value;
    let auxN1 = nueva1.value;
    let auxN2 = nueva2.value;
    let msg = '';
    let titulo = "Oops, parece que algo salio mal";
    if(auxAct == auxN1 && auxAct == auxN2){
      msg = 'La clave nueva no puede ser igual a la clave anterior';
    }else if(auxN1 != auxN2){
      msg = 'Las claves no conciden, por favor ingrese de nuevo';
    }else{
      titulo = 'Exito';
      msg = 'Clave cambiada de forma exitosa';
    }
    this.presentAlert(titulo, msg);
  }

  presentAlert(titulo, msg) {
    let alert = this.alerta.create({
      title: titulo,
      subTitle: msg,
      buttons: ['ok']
    });
    alert.present();
  }

}

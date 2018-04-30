import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public load:LoadingController, private http: Http) {
    this.principal = PrincipalPage;
    this.getCompanias().subscribe((data: any[]) =>{ 
      this.companias = data
    })
  }

  getCompanias(){
    return this.http.get(this.url + 'companias/').
    map((res: Response) => res.json())
  }

  postUsuario(compania, email, pass){
    
    alert('creando usuario')
    this.http.post(this.url + 'usuarios/', {
      email: email,
      compania: compania,
      contrasena: pass
    }).subscribe((res: Response) => res.json());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuentaPage');
  }

  log(msg):void{
    console.log(msg)
  }

  crearCuenta(compania, email, pass1, pass2){
    if(pass1.value != pass2.value){
      alert('La contraseña no coincide, ingresela de nuevo');
    }else{
      this.postUsuario(compania.split('.')[0], email, pass1)
    }
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

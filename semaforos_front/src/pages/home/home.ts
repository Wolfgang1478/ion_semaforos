import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CrearCuentaPage } from '../crear-cuenta/crear-cuenta';
import { PrincipalPage } from '../principal/principal';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

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

  constructor(public navCtrl: NavController, public load:LoadingController, private http: Http) {
    this.ionViewLoad();
    this.crear = CrearCuentaPage;
    this.principal = PrincipalPage;
    this.getUsuarios().subscribe((data: any[]) =>{ 
      this.usuarios = data
    })
  }

  getUsuarios(){
    return this.http.get(this.url + 'usuarios/').
    map((res: Response) => res.json())
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
      }else{
        alert('usuario o contraseña invalidos');
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

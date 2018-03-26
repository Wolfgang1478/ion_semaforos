import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;

  constructor(public navCtrl: NavController) {
    this.ionViewLoad();
  }

  ionViewLoad(){
    setTimeout(() =>{
      this.splash = false;
    }, 4000);
  }

}

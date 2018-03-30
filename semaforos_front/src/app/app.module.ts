import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';
import { PrincipalPage } from '../pages/principal/principal';
import { UsuarioPage } from '../pages/usuario/usuario';
import { AmbulanciasPage } from '../pages/ambulancias/ambulancias';
import { DetalleAmbulanciaPage } from '../pages/detalle-ambulancia/detalle-ambulancia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CrearCuentaPage,
    PrincipalPage,
    UsuarioPage,
    AmbulanciasPage,
    DetalleAmbulanciaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrearCuentaPage,
    PrincipalPage,
    UsuarioPage,
    AmbulanciasPage,
    DetalleAmbulanciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],

})
export class AppModule {}

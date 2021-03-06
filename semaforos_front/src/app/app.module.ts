import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';
import { PrincipalPage } from '../pages/principal/principal';
import { UsuarioPage } from '../pages/usuario/usuario';
import { AmbulanciasPage } from '../pages/ambulancias/ambulancias';
import { DetalleAmbulanciaPage } from '../pages/detalle-ambulancia/detalle-ambulancia';
import { EmergenciasPage } from '../pages/emergencias/emergencias';
import { SemaforoPage } from '../pages/semaforo/semaforo';
import { DetalleSemaforoPage } from '../pages/detalle-semaforo/detalle-semaforo';
import { CarruselPage } from '../pages/carrusel/carrusel';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CrearCuentaPage,
    PrincipalPage,
    UsuarioPage,
    AmbulanciasPage,
    DetalleAmbulanciaPage,
    EmergenciasPage,
    SemaforoPage,
    DetalleSemaforoPage,
    CarruselPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrearCuentaPage,
    PrincipalPage,
    UsuarioPage,
    AmbulanciasPage,
    DetalleAmbulanciaPage,
    EmergenciasPage,
    SemaforoPage,
    DetalleSemaforoPage,
    CarruselPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],

})
export class AppModule {}

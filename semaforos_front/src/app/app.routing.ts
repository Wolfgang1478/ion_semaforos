import { IonicModule } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';
import { PrincipalPage } from '../pages/principal/principal';

IonicModule.forRoot(HomePage,{},{
    links: [
        {component: CrearCuentaPage, name: 'crear'},
        {component: PrincipalPage, name: 'principal'}
    ]
});
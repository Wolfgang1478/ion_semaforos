import { IonicModule } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';

IonicModule.forRoot(HomePage,{},{
    links: [
        {component: CrearCuentaPage, name: 'crear'}
    ]
});
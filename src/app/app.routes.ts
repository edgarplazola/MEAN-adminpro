// ? Módulos
import { RouterModule, Routes } from '@angular/router';

// ? Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NofoundComponent } from './shared/nofound/nofound.component';


const APPROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NofoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(APPROUTES, { useHash: true });

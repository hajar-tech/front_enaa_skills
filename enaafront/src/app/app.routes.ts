import { Routes } from '@angular/router';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {RenduComponent} from './pages/rendu/rendu.component';

export const routes: Routes = [
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path:"rendu",
    component :RenduComponent
  }
];

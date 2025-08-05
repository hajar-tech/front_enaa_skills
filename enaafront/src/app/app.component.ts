import { Component } from '@angular/core';

import {RenduComponent} from './pages/rendu/rendu.component';
import {NavbarComponent} from './shared/navbar/navbar.component';

import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';


@Component({
  selector: 'app-root',
  imports: [

    RenduComponent,
    NavbarComponent,
    RouterOutlet,
    RouterLink,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'enaafront';
}

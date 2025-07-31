import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import {RenduComponent} from './pages/rendu/rendu.component';
import {NavbarComponent} from './shared/navbar/navbar.component';

import {RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [

    RenduComponent,
    NavbarComponent
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'enaafront';
}

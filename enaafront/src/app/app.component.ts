import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RenduComponent} from './pages/rendu/rendu.component';
import {NavbarComponent} from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RenduComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'enaafront';
}

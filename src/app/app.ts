import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './componants/navbar/navbar';
import { Footar } from './componants/footar/footar';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('START-FRAMEWORK');
}

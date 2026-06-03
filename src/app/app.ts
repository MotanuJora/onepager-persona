import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMe } from './about-me/about-me';
import { Career } from './career/career';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, AboutMe, Career, Projects, Contact, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('onepager-persona');
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { AboutMe } from '../about-me/about-me';
import { Career } from '../career/career';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Navbar, Hero, AboutMe, Career, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

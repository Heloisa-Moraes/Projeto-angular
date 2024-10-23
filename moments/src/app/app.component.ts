import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './components/pages/about/about.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent, HeaderComponent, MomentFormComponent, NewMomentComponent, NgModule, BrowserModule, AboutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'moments';
}

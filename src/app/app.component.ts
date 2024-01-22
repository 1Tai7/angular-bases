import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/components/counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { MainPageComponent } from './dbz/pages/main-page-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CounterComponent, HeroComponent, ListComponent, MainPageComponent],
})
export class AppComponent {
  public title: string = 'Mi primera app de angular';
}

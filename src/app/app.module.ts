import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  imports: [
    CommonModule,
    AppComponent,
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
  ],
  declarations: [],
  providers: [],
})
export class AppModule {}

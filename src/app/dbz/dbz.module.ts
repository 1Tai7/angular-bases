import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page-component';
import { AppComponent } from '../app.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  exports: [MainPageComponent],
  imports: [CommonModule, MainPageComponent, AppComponent, ListComponent],
})
export class DbzModule {}

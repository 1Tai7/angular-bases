import { Component } from '@angular/core';
import { ListComponent } from '../components/list/list.component';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  templateUrl: './main-page-component.html',
  imports: [ListComponent],
})
export class MainPageComponent {}

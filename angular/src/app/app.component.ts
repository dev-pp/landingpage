import { Component } from '@angular/core';
import { MenuItem } from './@thinkam/pilot/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly logoSrc: string = 'assets/images/devpp-logotipo.svg';
  readonly menus: Array<MenuItem> = [
    { path: '', label: 'Home', link: '/' },
    {
      path: 'code-of-conduct',
      label: 'Código de Conduta',
      link: 'code-of-conduct'
    }
  ];
}

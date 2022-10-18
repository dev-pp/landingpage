import { Component } from '@angular/core';
import { MenuItem } from './@thinkam/pilot/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly logoSrc: string = 'assets/images/devpp-logotipo.svg';
  readonly menus: Array<MenuItem> = [
    {
      path: '',
      label: 'Meetup',
      link: '/',
      isCTA: false
    },
    {
      path: 'podcast',
      label: 'Podcast',
      link: '#podcast',
      isCTA: false
    },
    {
      path: 'vacancies',
      label: 'Vagas',
      link: '#vacancies',
      isCTA: false
    },
    {
      path: 'partnerships',
      label: 'Parcerias',
      link: '#partnerships',
      isCTA: false
    },
    {
      path: 'register',
      label: 'FAÇA PARTE',
      link: 'register',
      isCTA: true
    }
  ];
}

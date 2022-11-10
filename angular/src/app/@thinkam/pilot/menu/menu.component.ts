import { Component, Input } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { SocialNetwork } from '../models/social-network.model';

@Component({
  selector: 'pilot-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() isCollapse: boolean = false;
  @Input() logoSrc?: string;
  @Input() logoHeight: string = '56';
  @Input() logoAlt: string = 'Logo';
  @Input() logoTitle: string = 'PILOT';
  @Input() linkSignUp?: string;
  @Input() titleSignUp?: string;
  @Input() menus: MenuItem[] = [];
  @Input() socialNetworks: SocialNetwork[] = [];
  show: any;

  open = false;

  closed(){
   this.open = true;
  }
  opned(){
    this.open = false;
  }
  
  isActive = (route: string): boolean => location.href.includes(route);
}
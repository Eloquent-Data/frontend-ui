import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/resources', title: 'Resources',  icon:'library_books', class: '' },
    { path: '/challenges', title: 'Challenges',  icon:'assignment_turned_in', class: '' },
    { path: '/projects', title: 'Projects',  icon:'bubble_chart', class: '' },
    { path: '/blog', title: 'Blogs',  icon:'library_add', class: '' },
    { path: '/discussion', title: 'Discussion',  icon:'forum', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  onLogout(){
    this.authService.logout()
  }
}

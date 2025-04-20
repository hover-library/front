import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrl: './menu-aside.component.css'
})
export class MenuAsideComponent {

  // introductionRoute = {
  //   label: 'introduction', route: '/dashboard/alert'
  // };


  menuRoutes = [
    { label: 'Alert', route: '/dashboard/alert' },
    { label: 'Badge', route: '/dashboard/badge' },
    { label: 'Button', route: '/dashboard/button' },
    { label: 'Input', route: '/dashboard/input' },
    { label: 'Spinner', route: '/dashboard/spinner' },

  ];

}

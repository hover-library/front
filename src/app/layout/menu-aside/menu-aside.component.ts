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
    { label: 'Alert', route: '/documentation/alert' },
    { label: 'Badge', route: '/documentation/badge' },
    { label: 'Button', route: '/documentation/button' },
    { label: 'Input', route: '/documentation/input' },
    { label: 'Spinner', route: '/documentation/spinner' },

  ];

}

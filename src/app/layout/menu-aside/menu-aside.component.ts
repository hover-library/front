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
    { label: 'alert', route: '/dashboard/alert' },
    { label: 'badge', route: '/dashboard/badge' },
    { label: 'button', route: '/dashboard/button' },
    // { label: 'input', route: '/dashboard/input' },
    { label: 'spinner', route: '/dashboard/spinner' },

  ];

}

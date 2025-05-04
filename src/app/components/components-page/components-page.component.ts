import { Component } from '@angular/core';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrl: './components-page.component.css'
})
export class ComponentsPageComponent {

  componentsRoutes = [

    { label: 'Alert', route: '/documentation/alert' },
    { label: 'Badge', route: '/documentation/badge' },
    { label: 'Button', route: '/documentation/button' },
    { label: 'Input', route: '/documentation/input' },
    { label: 'Spinner', route: '/documentation/spinner' },

  ];

}

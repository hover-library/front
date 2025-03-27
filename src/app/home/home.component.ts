import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ){}

  menuRoutes = [
    { label: 'Home', route: '/home' },
    { label: 'Components', route: '/dashboard' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];
  selectedIndex: number = -1; // Inicializamos en -1 para que ningún elemento esté seleccionado al inicio
  highlightStyle: any = {};


  selectItem(index: number): void {
    this.selectedIndex = index;
    this.updateHighlight();
  }

  updateHighlight(): void {
    const menuItems = this.el.nativeElement.querySelectorAll('li');
    if (menuItems[this.selectedIndex]) {
      const selectedItem = menuItems[this.selectedIndex];
      const rect = selectedItem.getBoundingClientRect();
      const parentRect = this.el.nativeElement.querySelector('ul').getBoundingClientRect();

      this.highlightStyle = {
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: `translateX(${rect.left - parentRect.left}px)`,
      };
    }
  }

}

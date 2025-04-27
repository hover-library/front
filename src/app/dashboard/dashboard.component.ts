// dashboard.component.ts

import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private apiUrl = 'https://back-sdm8.onrender.com/auth/dashboard';
  dashboardData: any;

  //  Detecta que componente se esta usando en la URL
  currentComponent: string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    //LIBRARY
    private fb: FormBuilder,
    private renderer: Renderer2, private el: ElementRef,
    // Saber que ruta es
    private route: ActivatedRoute
  ) {
    // Saber que componente hay en la url
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const childRoute = this.route.firstChild;
      if (childRoute && childRoute.snapshot.url.length > 0) {
        this.currentComponent = childRoute.snapshot.url[0].path;
      }
    });
  }



  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
    } else {
      console.log('No token found');
    }
  }

  //Modal
  // Método que se ejecuta cuando el modal se cierra
  onModalClosed() {
    console.log('Modal cerrado');
  }

  // Método que se ejecuta cuando se confirma el modal
  onModalConfirmed() {
    console.log('Modal confirmado');
  }

  /////// MENU ////////
  // menuRoutes: string[] = ['Home', 'Components', 'About', 'Contact'];
  menuRoutes = [
    { label: 'Home', route: '/home' },
    { label: 'Components', route: '/dashboard' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];
  // selectedIndex: number = -1; // Inicializamos en -1 para que ningún elemento esté seleccionado al inicio
  // highlightStyle: any = {};


  // selectItem(index: number): void {
  //   this.selectedIndex = index;
  //   this.updateHighlight();
  // }

  // updateHighlight(): void {
  //   const menuItems = this.el.nativeElement.querySelectorAll('li');
  //   if (menuItems[this.selectedIndex]) {
  //     const selectedItem = menuItems[this.selectedIndex];
  //     const rect = selectedItem.getBoundingClientRect();
  //     const parentRect = this.el.nativeElement.querySelector('ul').getBoundingClientRect();

  //     this.highlightStyle = {
  //       width: `${rect.width}px`,
  //       height: `${rect.height}px`,
  //       transform: `translateX(${rect.left - parentRect.left}px)`,
  //     };
  //   }
  // }





}

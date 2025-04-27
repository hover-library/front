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

  menuMobileDisplay: boolean = false;
  isLogged: boolean = false;
  menuOpen: boolean = false;


  // Accedemos a la señal directamente
  userMail = this.authService.getUserMail();

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
      this.isLogged = true;
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

  toggleMenu(){
    this.menuMobileDisplay = !this.menuMobileDisplay;
  }

  logout() {
    this.authService.deleteToken();
    this.authService.setUserMail('');
    this.menuOpen = false;
  }

  emailToggle() {
    this.menuOpen = !this.menuOpen;
  }





}

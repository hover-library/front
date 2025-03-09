// dashboard.component.ts

import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private apiUrl = 'https://back-sdm8.onrender.com/auth/dashboard'; // URL de tu backend para la ruta protegida
  dashboardData: any;

    // Formularios Reactivos
    formulario: FormGroup;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    //LIBRARY
    private fb: FormBuilder,
    private renderer: Renderer2, private el: ElementRef
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.http.get(this.apiUrl, { headers }).subscribe(
        (response) => {
          console.log('Dashboard data:', response);
        },
        (error) => {
          console.error('Error fetching dashboard data:');
        }
      );
    } else {
      console.log('No token found');
    }
  }

  logout() {
    // Elimina el token del localStorage
    localStorage.removeItem('access_token');

    // Redirige al login
    this.router.navigate(['/login']);
  }



  // LIBRARY

  // Inputs
  isDisabled: boolean = false;
  isInputInvalid: boolean = false;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  toggleInvalid() {
    this.isInputInvalid = !this.isInputInvalid;
  }



  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario enviado:', this.formulario.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  // Función para verificar si un campo es inválido
  isInvalid(controlName: string): boolean {
    const control = this.formulario.get(controlName);
    return control ? control.invalid && control.touched : false;
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
  menuItems: string[] = ['Home', 'Project', 'Services', 'Contact'];
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


import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'https://web-production-3b90.up.railway.app'; // URL del backend

  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient, private router: Router) {}

  // Método para registrar un usuario
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  // Método para hacer login de un usuario
  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user);
  }


  // Método para obtener el token JWT guardado en localStorage
  getToken(): string {
    // return localStorage.getItem('access_token') || '';
    return sessionStorage.getItem('access_token') || ''; // Devuelve el token almacenado
  }

  // Método para almacenar el token JWT en localStorage
  saveToken(token: string): void {
    // localStorage.setItem('access_token', token);
    sessionStorage.setItem('access_token', token); // Guarda el token en localStorage
  }


  deleteToken() {
    // Elimina el token del localStorage y sessionStorage
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('currentEmail');

    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  // Creamos la señal
  private userMail = signal<string>('');

  // Método para actualizar el mail
  setUserMail(email: string) {
    this.userMail.set(email);
    sessionStorage.setItem('currentEmail', email);
  }

  // Método para obtener la señal como readonly
  getUserMail() {
    // Verifica si hay un email en sessionStorage y lo establece en la señal
    const storedEmail = sessionStorage.getItem('currentEmail');
    if (storedEmail) {
      this.userMail.set(storedEmail);  // Establece el valor en la señal
    }
    return this.userMail.asReadonly();
  }


}

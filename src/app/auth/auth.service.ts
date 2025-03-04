import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Importar tap para manejar la respuesta

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://back-sdm8.onrender.com'; // URL de tu backend de NestJS

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  // Método para hacer login de un usuario
  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user).pipe(
      tap((response: any) => {
        if (response.access_token) {
          this.saveToken(response.access_token); // Guarda el token JWT en localStorage
        }
      })
    );
  }

  // Método para obtener el token JWT guardado en localStorage
  getToken(): string {
    return localStorage.getItem('access_token') || ''; // Devuelve el token almacenado
  }

  // Método para almacenar el token JWT en localStorage
  saveToken(token: string): void {
    localStorage.setItem('access_token', token); // Guarda el token en localStorage
  }

  // Método para obtener los encabezados con el token JWT
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Ejemplo de cómo hacer una solicitud protegida con el token
  // getProfile(): Observable<any> {
  //   const headers = this.getAuthHeaders();
  //   return this.http.get(`${this.apiUrl}/auth/profile`, { headers });
  //   // Asegúrate de tener una ruta protegida
  // }
}

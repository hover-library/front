// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'http://localhost:3000/auth'; // URL de tu backend de NestJS
  private apiUrl = 'https://back-5eiw.onrender.com'; // URL de tu backend de NestJS

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Método para hacer login de un usuario
  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  // Método para obtener el token JWT guardado en localStorage
  getToken(): string {
    return localStorage.getItem('access_token') || ''; // Devuelve el token almacenado
  }

  // Método para almacenar el token JWT en localStorage
  saveToken(token: string): void {
    localStorage.setItem('access_token', token); // Guarda el token en localStorage
  }
}

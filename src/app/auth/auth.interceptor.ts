// src/app/auth/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtén el token JWT almacenado en el localStorage
    const token = this.authService.getToken();

    // Si el token está disponible, lo añadimos a la cabecera de la solicitud
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Continua con la solicitud modificada
      return next.handle(cloned);
    }

    // Si no hay token, solo pasamos la solicitud tal como está
    return next.handle(req);
  }
}

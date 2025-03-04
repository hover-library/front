import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inyectamos el Router
  const token = localStorage.getItem('access_token'); // Intentamos obtener el token del localStorage

  console.log('Checking token in localStorage:', token); // Añadimos un console.log para ver si el token existe

  if (!token) {
    console.log('No token found. Redirecting to login...');
    router.navigate(['/login']);
    return false;
  }

  // Verificar si el token ha expirado
  const tokenExpirationDate = JSON.parse(atob(token.split('.')[1])).exp * 1000; // Decodifica el token y obtiene la fecha de expiración
  const currentTime = new Date().getTime();

  if (currentTime > tokenExpirationDate) {
    console.log('Token expired. Redirecting to login...');
    localStorage.removeItem('access_token'); // Elimina el token expirado
    router.navigate(['/login']);
    return false;
  }

  // Si hay token y no ha expirado, permite el acceso a la ruta protegida
  return true;
};

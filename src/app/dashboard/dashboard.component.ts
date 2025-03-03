// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/dashboard'; // URL de tu backend para la ruta protegida

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.http.get(this.apiUrl, { headers }).subscribe(
        (response) => {
          console.log('Dashboard data:', response);
        },
        (error) => {
          console.error('Error fetching dashboard data:', error);
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
}

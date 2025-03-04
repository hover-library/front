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
  private apiUrl = 'https://back-sdm8.onrender.com/auth/dashboard'; // URL de tu backend para la ruta protegida
  dashboardData: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.authService.getToken();

    if (!token) {
      console.log('No token found');
      this.router.navigate(['/login']); // Redirige al login si no hay token
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get(this.apiUrl, { headers }).subscribe(
      (response) => {
        this.dashboardData = response;
        console.log('Dashboard data:', response);
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
        if (error.status === 401) {
          // Si el token no es válido o ha expirado, redirige al login
          this.router.navigate(['/login']);
        }
      }
    );
  }

  logout() {
    // Elimina el token del localStorage
    localStorage.removeItem('access_token');
    // Redirige al login
    this.router.navigate(['/login']);
  }
}

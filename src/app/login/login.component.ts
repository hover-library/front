import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login(this.user).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.authService.saveToken(response.access_token); // Guarda el token en el localStorage
        this.router.navigate(['/dashboard']); // Redirige a una página protegida después de iniciar sesión
      },
      (error) => {
        console.error('Login error');
      }
    );
  }
}

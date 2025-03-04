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
        this.router.navigate(['/dashboard']); // Redirige a la página protegida después de iniciar sesión
      },
      (error) => {
        console.error('Login error', error);
        // Mostrar un mensaje adecuado al usuario si el login falla
        alert('Error de login. Por favor, verifique sus credenciales.');
      }
    );
  }
}

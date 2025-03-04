import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '' // Añadir confirmación de contraseña
  };

  errorMessage: string = ''; // Para almacenar el mensaje de error si hay un problema

  constructor(private authService: AuthService, private router: Router) { }

  onRegister() {
    // Validación básica de campos
    if (this.user.password !== this.user.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    if (!this.user.email || !this.user.password || !this.user.name) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }

    // Limpiar el mensaje de error
    this.errorMessage = '';

    // Realiza la solicitud de registro
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']); // Redirige al login después de registrarse
      },
      (error) => {
        console.error('Registration error', error);
        if (error.status === 400) {
          // Aquí puedes capturar errores específicos, como un email ya registrado
          this.errorMessage = 'Error en el registro. El email puede estar en uso.';
        } else {
          this.errorMessage = 'Hubo un problema con el registro. Intenta de nuevo más tarde.';
        }
      }
    );
  }
}

// src/app/register/register.component.ts
import { FormsModule } from '@angular/forms';
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
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  onRegister() {
    this.authService.register(this.user).subscribe(
      (response) => {
        // console.log('User registered successfully', response);
        console.log('User registered successfully');
        this.router.navigate(['/login']); // Redirige al login después de registrarse
      },
      (error) => {
        console.error('Registration error');
      }
    );
  }
}

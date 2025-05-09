import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isNotLogged: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]]
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loginForm.patchValue({
        email: 'juanma@gmail.com',
        password: 'Y7p!dL9q$Xv3@Rt2'
      });
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid){
      this.isNotLogged = true;
      return;
    }

    const user = this.loginForm.value;

    this.authService.login(user).subscribe(
      (response) => {
        // console.log("Loggin Success", user);

        this.authService.setUserMail(user.email);
        this.authService.saveToken(response.access_token);
        this.router.navigate(['/documentation']);
      }
    );
  }
}

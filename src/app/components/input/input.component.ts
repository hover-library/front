import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

      // Formularios Reactivos
      formulario: FormGroup;

    constructor(
      private http: HttpClient,
      private authService: AuthService,
      private router: Router,
      //LIBRARY
      private fb: FormBuilder,
      private renderer: Renderer2, private el: ElementRef,

    ) {
      this.formulario = this.fb.group({
        nombre: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });

    }



    // LIBRARY

  // Inputs
  isDisabled: boolean = false;
  isInputInvalid: boolean = false;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  toggleInvalid() {
    this.isInputInvalid = !this.isInputInvalid;
  }



  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario enviado:', this.formulario.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  // Función para verificar si un campo es inválido
  isInvalid(controlName: string): boolean {
    const control = this.formulario.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  // Mensajes personalizados para los campos
  emailMessages = {
    required: 'Este campo es obligatorio',
    pattern: 'Ingresa una dirección de correo válida'
  };

  passwordMessages = {
    required: 'Este campo es obligatorio',
    minlength: 'Se requieren al menos 8 caracteres'
  };

  ageMessages = {
    min: 'La edad debe ser al menos 18 años',
    max: 'La edad no debe superar los 99 años'
  };

  constructor(private fb: FormBuilder) {}

  // Formulario principal
  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    age: [null, [Validators.min(18), Validators.max(99)]]
  });

  // Formulario de verificación de términos y condiciones
  checkForm = this.fb.group({
    acceptTerms: [false, Validators.requiredTrue],
    newsletter: [true]
  });

  // Método para enviar el formulario
  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario Enviado', this.form.value);
      this.reset();
    }
  }

  // Método para resetear el formulario
  reset() {
    this.form.reset();
    // Actualizar manualmente los valores visuales en los ui-inputs
    this.form.get('email')?.setValue('');
    this.form.get('password')?.setValue('');
    this.form.get('age')?.setValue(null);
  }

  // Variantes de inputs para mostrar ejemplos
  inputsBasic = `
  <hover-input label="Full Name" icon="person"></hover-input>
  <hover-input label="Password" type="password" icon="lock"></hover-input>`;

  inputStates = `
  <hover-input label="Email" type="email" icon="mail"></hover-input>
  <hover-input label="Phone" type="tel" icon="phone"></hover-input>
  <hover-input label="Password" type="password" icon="lock"></hover-input>
  <hover-input label="Disabled" [disabled]="true" icon="block" value="Example"></hover-input>`;

  reactiveForm = `
      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form-reactive">
      <hover-input
        label="Corporate Email"
        type="email"
        formControlName="email"
        [control]="form.get('email')"
        icon="alternate_email"
        [customMessages]="emailMessages"
      ></hover-input>

      <hover-input
        label="Password"
        type="password"
        formControlName="password"
        [control]="form.get('password')"
        icon="lock"
        [customMessages]="passwordMessages"
      ></hover-input>

      <hover-input
        label="Age (optional)"
        type="text"
        formControlName="age"
        [control]="form.get('age')"
        helperText="Between 18 and 99"
        icon="elderly"
      ></hover-input>

      <div class="actions">
        <hover-button
          color="primary"
          type="submit"
          [disabled]="form.invalid ? 'disabled' : ''"
        >
          Submit Form
        </hover-button>

        <hover-button
          color="secondary"
          type="button"
          (click)="reset()"
          icon="delete"
        >
          Clear
        </hover-button>
      </div>
    </form>`;

  // Método para copiar el código
  copyCode(code: string) {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Code copied to clipboard!');
  }
}

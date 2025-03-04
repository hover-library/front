import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // Para los componentes de Formularios Reactivos
import { FormsModule } from '@angular/forms'; // <-- Importa FormsModule
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component'; // También necesitarás HttpClientModule para las solicitudes HTTP

// Importa el interceptor
import { AuthInterceptor } from './auth/auth.interceptor';
import { PepeTestLibraryComponent } from 'pepe-test-library';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

],
  providers: [
    // Aquí registramos el interceptor
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

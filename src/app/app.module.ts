import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar esto

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
import { HomeComponent } from './home/home.component';
import { MenuAsideComponent } from './layout/menu-aside/menu-aside.component';
import { ListAsideComponent } from './layout/list-aside/list-aside.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HoverLibraryModule } from 'hover-angular-library';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    MenuAsideComponent,
    ListAsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    HoverLibraryModule
],
exports: [
  HoverLibraryModule
],
  providers: [
    // Aquí registramos el interceptor
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

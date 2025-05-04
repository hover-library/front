import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar esto

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ComponentsPageComponent } from './components/components-page/components-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    MenuAsideComponent,
    ListAsideComponent,
    IntroductionComponent,
    ComponentsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    HoverLibraryModule,
    BrowserAnimationsModule
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

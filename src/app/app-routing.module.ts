import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { DashboardComponent } from './dashboard/dashboard.component'; // Suponiendo que tienes un componente de dashboard
import { authGuard } from './auth/auth.guard'; // Asegúrate de importar la guardia

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige al login si no hay ruta especificada
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // Redirige al login si no hay ruta especificada
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

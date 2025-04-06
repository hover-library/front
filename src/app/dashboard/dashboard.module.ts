import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
// import { PepeTestLibraryModule } from 'pepe-test-library';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { AlertComponent } from '../components/alert/alert.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverLibraryModule } from 'hover-angular-library';




@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    BadgeComponent,
    AlertComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    HoverLibraryModule
]
})
export class DashboardModule { }

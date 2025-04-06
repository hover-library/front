import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ButtonComponent } from '../components/button/button.component';
import { AlertComponent } from '../components/alert/alert.component';
import { InputComponent } from '../components/input/input.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { IntroductionComponent } from '../components/introduction/introduction.component';


const routes: Routes = [
  {path: '', component: DashboardComponent,
    children: [
      {path: '', component : AlertComponent},
      {path: 'introduction', component : IntroductionComponent},
      {path: 'alert', component : AlertComponent},
      {path: 'badge', component : BadgeComponent},
      {path: 'button', component : ButtonComponent},
      {path: 'input', component : InputComponent},
      {path: 'spinner', component : SpinnerComponent},
  ]}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

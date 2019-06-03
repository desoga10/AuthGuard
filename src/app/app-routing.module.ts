import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SeminarComponent } from './seminar/seminar.component';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/seminar',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'exclusive',
    component: ExclusiveComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'seminar',
    component: SeminarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { MejoresPeliculasComponent } from './mejores-peliculas/mejores-peliculas.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
/* import { PhoneLoginComponent } from './phone-login/phone-login.component'; */
// route guard
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/sign-in' },
  {path: 'inicio', component: InicioComponent},
  {path: 'mejoresPeliculas', component: MejoresPeliculasComponent},
  {path: 'preguntasFrecuentes', component: PreguntasFrecuentesComponent},
  {path: 'iniciarSesion', component: IniciarSesionComponent},
  {path: 'contacto', component: ContactoComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  /* { path: 'phone-login', component: PhoneLoginComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

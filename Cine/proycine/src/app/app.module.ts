import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//firebase y DB
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { MejoresPeliculasComponent } from './mejores-peliculas/mejores-peliculas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from './shared/services/auth.service';
import { ServiceWorkerModule } from '@angular/service-worker';
/* import { PhoneLoginComponent } from './phone-login/phone-login.component'; */

@NgModule({
  declarations: [
    AppComponent,
    PreguntasFrecuentesComponent,
    MejoresPeliculasComponent,
    ContactoComponent,
    IniciarSesionComponent,
    InicioComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    /* PhoneLoginComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }


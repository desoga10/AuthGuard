import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthserveService } from '../app/authserve.service';
import { SeminarService } from '../app/seminar.service';
import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SeminarComponent } from './seminar/seminar.component';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SeminarComponent,
    ExclusiveComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthserveService,
    AuthGuard,
    SeminarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

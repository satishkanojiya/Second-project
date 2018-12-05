import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { routes } from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {FormServices} from '../app/model/form.services';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  ],
  providers: [FormServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

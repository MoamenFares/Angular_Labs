import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { XyzComponent } from './xyz/xyz.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NotFoundComponent,
    LoginComponent,
    XyzComponent


  ],
  imports: [
    BrowserModule,StudentModule,CoreModule,AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

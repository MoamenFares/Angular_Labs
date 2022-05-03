import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RatingModule} from 'primeng/rating';

import {PasswordModule} from 'primeng/password';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,SharedModule,FormsModule,BrowserAnimationsModule,RatingModule,PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

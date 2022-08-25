import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } 
from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminMovieComponent } from './admin-movie/admin-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddTheaterComponent } from './add-theater/add-theater.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateTheatreComponent } from './update-theatre/update-theatre.component';
import { TheaterDetailsComponent } from './theater-details/theater-details.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { UserMovieDetailsComponent } from './user-movie-details/user-movie-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { NgToastModule } from 'ng-angular-popup';
import { AdminTicketComponent } from './admin-ticket/admin-ticket.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    LoginPageComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminMovieComponent,
    AddMovieComponent,
    AddTheaterComponent,
    UserHomeComponent,
    UserNavbarComponent,
    BookTicketComponent,
    MovieDetailsComponent,
    ModalComponent,
    UpdateTheatreComponent,
    TheaterDetailsComponent,
    AdminScreenComponent,
    UserMovieDetailsComponent,
    ContactComponent,
    AdminContactComponent,
    AdminTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

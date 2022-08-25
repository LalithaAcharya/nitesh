
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddTheaterComponent } from './add-theater/add-theater.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMovieComponent } from './admin-movie/admin-movie.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TheaterDetailsComponent } from './theater-details/theater-details.component';
import { UpdateTheatreComponent } from './update-theatre/update-theatre.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserMovieDetailsComponent } from './user-movie-details/user-movie-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminTicketComponent } from './admin-ticket/admin-ticket.component';

const routes: Routes = [
  {
    path:"",
    component:LandingComponent
  },
  {
    path:"login",
    component:LoginPageComponent
  },
  {
    path:"admin",
    component:AdminLoginComponent
  },
  {
    path:"adminHome",
    component:AdminHomeComponent
  },
  {
    path:"adminMovie",
    component:AdminMovieComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"addMovie/:id",
    component:AddMovieComponent
  },
  {
    path:"addTheater",
    component:AddTheaterComponent
  },
  {
    path:"userHome",
    component:UserHomeComponent
  },
  {
    path:"bookTicket",
    component:BookTicketComponent
  },
  {
    path:"movieDetail/:id",
    component:MovieDetailsComponent
  },
  {
    path:"updateTheatre/:id",
    component:UpdateTheatreComponent
  },
  {
    path:"theatreDetails/:id",
    component:TheaterDetailsComponent
  },
  {
    path:"screen/:id",
    component:AdminScreenComponent
  },
  {
    path:"userMovieDetails/:id",
    component:UserMovieDetailsComponent
  },
  {
    path:"booking",
    component:BookTicketComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"adminContact",
    component:AdminContactComponent
  },
  {
    path:"adminTicket",
    component:AdminTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

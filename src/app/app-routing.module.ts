import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddTheaterComponent } from './add-theater/add-theater.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMovieComponent } from './admin-movie/admin-movie.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UserHomeComponent } from './user-home/user-home.component';

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
    path:"addMovie",
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
    path:"movieDetail",
    component:MovieDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

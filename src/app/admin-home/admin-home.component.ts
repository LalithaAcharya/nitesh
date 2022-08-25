import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../model/movie';
import { Theater } from '../model/theater';
import { MovieService } from '../services/movie.service';
import { TheaterService } from '../services/theater.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public movie:Movie= new Movie();

  public movies!:Movie[];
  public theatre:Theater=new Theater()
  public theatres!:Theater[];
  constructor( private ms:MovieService,private ts:TheaterService, private route:Router) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this.ms.getmovie().subscribe(data=>{
      this.movies=data
      // this.employee=data
      // this.books=data;
      // this.books=data
      console.log(data)
      this.ts.gettheater().subscribe(data=>{
        this.theatres=data
      })

    })
  }

  ondetails(id:number){
    this.route.navigate([`movieDetail/${id}`]);
  }
  OnView(id:number){
    this.route.navigate([`theatreDetails/${id}`])
  }
  // getdetails(id:number){
  //   this.ms.getvalbyid(id).subscribe(data=>{
  //     this.route.navigate(['/MovieDetails'])
  //   })

  //   }

}

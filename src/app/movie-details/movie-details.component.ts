import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie:Movie= new Movie();
  id!:number;
  public movies!:Movie[];
  constructor(private ms:MovieService, private route:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(){
    this.id=this.activateRoute.snapshot.params['id']
    this.ms.getvalbyid(this.id).subscribe(data=> {
      console.log(data)
      this.movie=data
    },error=> console.log(error));
  }

  // getdetails(id:number){
  //   this.ms.getvalbyid(id)
  //     .subscribe((data)=>this.movie=data)
  //     console.log(this.movie)
  //   }

    }




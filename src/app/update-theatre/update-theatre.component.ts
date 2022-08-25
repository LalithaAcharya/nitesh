
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Movie } from '../model/movie';
import { Theater } from '../model/theater';
import { MovieService } from '../services/movie.service';
import { TheaterService } from '../services/theater.service';

@Component({
  selector: 'app-update-theatre',
  templateUrl: './update-theatre.component.html',
  styleUrls: ['./update-theatre.component.css']
})
export class UpdateTheatreComponent implements OnInit {

  public theatre:Theater=new Theater();
  id!:number;
  public theatres!:Theater[];
  public movie:Movie=new Movie();
  public movies!:Movie[];
  constructor(private ts:TheaterService,private ms:MovieService,private route:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovies();
    this.id=this.activatedRoute.snapshot.params['id'];
    this.ts.gettheaterbyid(this.id).subscribe(data=>{
      this.theatre=data;
    },error=>console.log(error));
    this.ms.getvalbyid(this.id).subscribe(data=>{
      this.movie=data;
    },error=>console.log(error));
   
  }

  onSubmit(){
    this.ts.updatetheater(this.id,this.theatre).subscribe(data=>
      {
        this.gotoList();
      },
      error=>console.log(error));
   }

   gotoList(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have updated the theatre details successfully',
      showConfirmButton: true
    }).then((result)=>{
      this.route.navigate(['/addTheater']);
    });
   }

   getMovies(){
    this.ms.getmovie().subscribe(data=>{
      this.movies=data;
    })
  }
}

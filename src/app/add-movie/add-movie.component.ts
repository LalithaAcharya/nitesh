
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  public movie:Movie= new Movie();
  id!:number;
  public movies!:Movie[];
  constructor(private ms:MovieService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
    this.ms.getvalbyid(this.id).subscribe(data=>{
      this.movie=data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.ms.updatemovie(this.id,this.movie).subscribe(data=>
      {
        this.gotoList();
      },
      error=>console.log(error));
   }

   gotoList(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have update the details successfully',
      showConfirmButton: true
    }).then((result)=>{
      this.router.navigate(['/adminMovie']);
    });
   }
 

}

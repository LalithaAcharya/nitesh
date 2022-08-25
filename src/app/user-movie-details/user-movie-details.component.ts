import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../modal.service';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-user-movie-details',
  templateUrl: './user-movie-details.component.html',
  styleUrls: ['./user-movie-details.component.css']
})
export class UserMovieDetailsComponent implements OnInit {
  bodyText!: string;
  seat!:any;
  public movie:Movie= new Movie();
  id!:number;
  public movies!:Movie[];
  constructor(private modalService: ModalService, private ms:MovieService, private route:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id']
    this.ms.getvalbyid(this.id).subscribe(data=> {
      console.log(data)
      this.movie=data
    },error=> console.log(error));
    this.getdata();
    this.bodyText = 'This text can be updated in modal 1';
  }

  getdata(){
    this.ms.getmovie().subscribe(data=>{
      this.movies=data
      // this.employee=data
      // this.books=data;
      // this.books=data
      console.log(data)
    })
  }


  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  checkCheckBoxvalue(event:any){
    console.log(event.target.value)
    this.seat=event.target.value;
  }

  submit(event:any){
    console.log(event.target.value);
  }

}

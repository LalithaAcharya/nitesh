
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ModalService } from '../modal.service';
import { Movie } from '../model/movie';
import { Theater } from '../model/theater';
import { Ticket } from '../model/ticket';
import { MovieService } from '../services/movie.service';
import { TheaterService } from '../services/theater.service';
import { TicketService } from '../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  bodyText!: string;
   seat!:any;
   public movie:Movie= new Movie();

   public movies!:Movie[];
   public theater:Theater=new Theater()
   public theaters!:Theater[];
   public ticket:Ticket=new Ticket();
   public tickets!:Ticket[];

   
  constructor(private modalService: ModalService, private ms:MovieService,private ts:TheaterService,private tk:TicketService, private route:Router, private activateRoute:ActivatedRoute) { }

  
  ngOnInit() {
    this.ticket.price=250;
    this.getdata();
    this.gettheaters();
    this.gettickets();
    this.getDate();
    // const currentYear = moment().year();
    // this.minDate = moment([currentYear - 1, 0, 1]);
    // this.maxDate = moment([currentYear + 1, 11, 31]);
      this.bodyText = 'This text can be updated in modal 1';
  }
  minDate:any=""; 
  seats_no!:any;
 time!:any;
  getDate(){
    var date: any= new Date();
    var toDate:any=date.getDate();
    if(toDate<10){
      toDate="0" + toDate;
    }
    console.log(toDate)
    var month:any=date.getMonth()+1;
    if(month<10){
      month="0" + month;
    }
    var year:any=date.getFullYear();
    console.log(year)
    this.minDate=year + "-" + month + "-" + toDate
  }

  gettotal(){
    // this.time=this.ticket.movie_time;
    this.seats_no=this.ticket.no_of_seats*this.ticket.price;
    console.log(this.seats_no)
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
  gettheaters(){
    this.ts.gettheater().subscribe(data=>{
      this.theaters=data;
    })
  }
  gettickets(){
    this.tk.getticket().subscribe(data=>{
      this.tickets=data;
    })
  }

  onsubmit(){
    this.addticket();
    this.gettotal();
    console.log(this.tickets)
  }

onConfirm(){
    this.route.navigate([`/booking`])
}

  addticket(){
    this.tk.addticket(this.ticket).subscribe(data=>{
      console.log(data)
        this.ticket=new Ticket();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have booked your movie successfully',
          showConfirmButton: true
        }).then((result)=>{
          this.gettickets();
        })
     },
     error=>console.log(error))
  }

  onDetails(id:number){
    this.route.navigate([`userMovieDetails/${id}`]);
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  checkCheckBoxvalue(event:any){
    this.seat=event.target.value;
  }
  submit(event:any){
    console.log(event.target.value);
  }
}

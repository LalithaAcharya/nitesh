
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
   disable:boolean=true;
   vehicle!:any;
   public movie:Movie= new Movie();
   options = ['A1', 'A2', 'A3', 'A4', 'A5','A6','A7','A8','A9','A10','A11','A12']
   option1 = ['B1', 'B2', 'B3', 'B4', 'B5','B6','B7','B8','B9','B10','B11','B12']
   option2 = ['C1', 'C2', 'C3', 'C4', 'C5','C6','C7','C8','C9','C10','C11','C12']
   option3 = ['D1', 'D2', 'D3', 'D4', 'D5','D6','D7','D8','D9','D10','D11','D12']
   option4 = ['E1', 'E2', 'E3', 'E4', 'E5','E6','E7','E8','E9','E10','E11','E12']
   option5 = ['F1', 'F2', 'F3', 'F4', 'F5','F6','F7','F8','F9','F10','F11','F12']
   option6 = ['G1', 'G2', 'G3', 'G4', 'G5','G6','G7','G8','G9','G10','G11','G12']
   option7 = ['H1', 'H2', 'H3', 'H4', 'H5','H6','H7','H8','H9','H10','H11','H12']
   selected : string[]  = []
 
   messages : string[]  = [];
 
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
    // this.gettotal();
    console.log(this.tickets)
  }

onConfirm(){
  this.gettotal();
  if(this.ticket.no_of_seats<=this.selected.length){
    this.disable=true;
}
}

  addticket(){
    if(this.ticket.no_of_seats==this.selected.length){
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
          this.route.navigate([`/booking`])
        })
     },
     error=>console.log(error))
  }else{
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'please select the '+this.ticket.no_of_seats+' number of seats! Please Do not select more or less seats', 
      showConfirmButton: true
    }).then((result)=>{
       this.route.navigate([`/userHome`])
    })
  }
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

//   checkCheckBoxvalue(event:any){
//     this.seat=event.target.value;
//     var checkboxes =this.vehicle;
//     for (var checkbox of checkboxes)
//     {
//         if (checkbox.checked) {
//             this.seat=checkbox.value + ' ';
//         }
//   }
// }
  submit(event:any){
    console.log(event.target.value);
  }

  checked(item){
    this.selected=this.ticket.seats;
    if(this.selected.indexOf(item) != -1){
      return true;
    }
  }
  
  // when checkbox change, add/remove the item from the array
  onChange(event:any, item){
    this.selected=this.ticket.seats;
    const ischecked = (<HTMLInputElement>event.target).checked
    if(ischecked){
    this.selected.push(item);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1)
    }
    // const value=this.selected;
    // localStorage.setItem("seat-name",value)
  }

  save(){
    this.messages.push(this.selected[0]);
  }

//   document.getElementById('select').onclick = function() {
//     var checkboxes = document.getElementsByName('vehicle');
//     for (var checkbox of checkboxes)
//     {
//         if (checkbox.checked) {
//             document.body.append(checkbox.value + ' ');
//         }
//     }
// } 


}

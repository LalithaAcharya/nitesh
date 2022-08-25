import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../model/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-admin-ticket',
  templateUrl: './admin-ticket.component.html',
  styleUrls: ['./admin-ticket.component.css']
})
export class AdminTicketComponent implements OnInit {

  public ticket:Ticket=new Ticket();
   public tickets!:Ticket[];
  constructor(private tk:TicketService, private route:Router, private activateRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.gettickets();
  }

  gettickets(){
    this.tk.getticket().subscribe(data=>{
      this.tickets=data;
    })
  }

  // deletepost(id:number){
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.tk.delticket(id).subscribe(data=>{
  //         console.log("deleted");
  //         Swal.fire(
  //           'Deleted!',
  //           'Your file has been deleted.',
  //           'success'
  //         )
  //         this.gettickets();
  //       })
    
  //     }
  //     else if(result.dismiss==Swal.DismissReason.cancel){
  //       Swal.fire(
  //         'Cancelled',
  //         'Your file is safe',
  //         'error'
  //       )
    
  //     }
  //   })
    
    
    // }
}

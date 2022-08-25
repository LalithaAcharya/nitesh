import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Customer } from '../model/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {
  public customer:Customer=new Customer();
  public customers!:Customer[];
 constructor(private cs:CustomerService, private route:Router, private activateRoute:ActivatedRoute) { }
 ngOnInit(): void {
   this.getCustomer();
 }

 getCustomer(){
   this.cs.getcust().subscribe(data=>{
     this.customers=data;
   })
 }

//  deletepost(id:number){
//    Swal.fire({
//      title: 'Are you sure?',
//      text: "You won't be able to revert this!",
//      icon: 'warning',
//      showCancelButton: true,
//      confirmButtonColor: '#3085d6',
//      cancelButtonColor: '#d33',
//      confirmButtonText: 'Yes, delete it!'
//    }).then((result) => {
//      if (result.isConfirmed) {
//        this.tk.delticket(id).subscribe(data=>{
//          console.log("deleted");
//          Swal.fire(
//            'Deleted!',
//            'Your file has been deleted.',
//            'success'
//          )
//          this.gettickets();
//        })
   
//      }
//      else if(result.dismiss==Swal.DismissReason.cancel){
//        Swal.fire(
//          'Cancelled',
//          'Your file is safe',
//          'error'
//        )
   
//      }
//    })
   
   
//    }

}


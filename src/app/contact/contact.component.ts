import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Customer } from '../model/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public customer:Customer=new Customer;
  public customers!:Customer[];
  constructor(private cs:CustomerService) { }

  ngOnInit(): void {
  
  }
  onsubmit(){
    console.log(this.customer)
    this.addcustomer()
    // this.getDismissReason("save click");
  }
   addcustomer(){
     this.cs.addCustomer(this.customer).subscribe(data=>{
      console.log(data)
        this.customer=new Customer();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thank you! you have submitted you query/feedback  successfully',
          showConfirmButton: true
        })
     },
     error=>console.log(error))
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  view=true;
  changeView(){
    this.view=false;
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  opendailoge(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home']);
    
      }
      else if(result.dismiss==Swal.DismissReason.cancel){
        Swal.fire(
          'Cancelled',
          'Your file is safe',
          'error'
        )
    
      }
    })
    
    
    }
}

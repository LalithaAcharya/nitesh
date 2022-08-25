import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have logged out successfully',
      showConfirmButton: true
    }).then((result)=>{
      this.route.navigate(['/admin']);
    })
  }

}

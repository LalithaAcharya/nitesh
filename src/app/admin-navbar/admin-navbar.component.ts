import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  // id!:number;
  constructor(private ms:MovieService, private route:Router) { }

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

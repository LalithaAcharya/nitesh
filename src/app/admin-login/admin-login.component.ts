
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthunticateService } from '../services/authunticate.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username = ''
  password = ''
  msg='';
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthunticateService,
    private toast: NgToastService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.toast.success({detail:"SUCCESS",summary:'Login Successfull!',duration:5000});
      this.router.navigate(['/adminHome'])
      this.invalidLogin = false
    } else
    this.toast.error({detail:"ERROR",summary:'Invalid login details',sticky:true});
    // this.msg="Invalid login details"
      this.invalidLogin = true
  }


}

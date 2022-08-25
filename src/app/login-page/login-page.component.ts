import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
import { User } from '../model/user';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user=new User();
  msg='';
  public loginForm !: FormGroup;
  public signUpForm !: FormGroup;
  constructor(private service: RegistrationService ,private toast: NgToastService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
    this.signUpForm = this.formBuilder.group({
      fullName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signUp(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response recived");
        this.msg="Registration successfull";
        this.toast.success({detail:"SUCCESS",summary:'Registeration Successfull!',duration:5000});
        // this.router.navigate(['/login']);
        // Swal.fire({
        //   position: 'center',
        //   icon: 'success',
        //   title: 'You have uploaded your movie successfully',
        //   showConfirmButton: true
        // })
      },
      error=>{
        console.log("exception occured");
        this.toast.error({detail:"ERROR",summary:'Your Error Message',sticky:true});
      }
    )
    }
  
  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data=>{
      console.log("response recieved");
      this.toast.success({detail:"SUCCESS",summary:'Login Successfull! Welcome to Movie-Booking,Book your Movie',duration:5000});
      this.router.navigate(['/userHome']);
      },
      error=>{
        this.toast.error({detail:"ERROR",summary:'User nor found',duration:5000});
        console.log("exception occurd");
        this.msg="Bad credentials,please enter valid emailid and passward"
      }
    )
}

}

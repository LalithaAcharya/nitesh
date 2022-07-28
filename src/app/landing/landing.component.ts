import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  view=true;
  changeView(){
    this.view=false;
  }
  closeResult: string = '';
  constructor(private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  opendailoge(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to save this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#367C2B',
      cancelButtonColor: '#FEDE32',
      confirmButtonText: 'Yes, exit'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home']);
    
      }
      else if(result.dismiss==Swal.DismissReason.cancel){
        // Swal.fire(
        //   'Cancelled',
        //   'Continue ',
        //   'error'
        // )
    
      }
    })
    
    
    }

    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
}

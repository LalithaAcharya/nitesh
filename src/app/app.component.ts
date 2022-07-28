import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boot';

  constructor(private router:Router){}

  view=true;
  changeView(){
    this.view=false;
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
        // this.es.delval(id).subscribe(data=>{
        //   console.log("deleted");
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        //   this.getdata();
        // })
        this.router.navigate(['/dashboard']);
    
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

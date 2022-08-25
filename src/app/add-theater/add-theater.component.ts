
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Movie } from '../model/movie';
import { Theater } from '../model/theater';
import { MovieService } from '../services/movie.service';
import { TheaterService } from '../services/theater.service';

@Component({
  selector: 'app-add-theater',
  templateUrl: './add-theater.component.html',
  styleUrls: ['./add-theater.component.css']
})
export class AddTheaterComponent implements OnInit {
  closeResult: string = '';
  public theatre:Theater= new Theater();
  public showStorage: any;
  public theatres!:Theater[];
  public screenData: number[]=[];
  public movie:Movie=new Movie();
  public movies!:Movie[];
  constructor( private modalService: NgbModal, private ts:TheaterService, private route:Router, private activateRoute:ActivatedRoute,private ms:MovieService) {
   }

  ngOnInit(): void {
    this.gettheatres();
    this.getMovies();
  }

  no_of_screens:number=200;

  // save(){
  //   localStorage.removeItem("screendetails");
  //   let dataStorage = {
  //     no_of_screens:this.theatre.no_of_screens
  //     //     departureDate: this.departureDate,
  //     //     returnDate: this.returnDate,
  //     //     departureAirport: this.departureAirport,
  //     //     arrivalAirport: this.destinationAirport,
  //     //     passengersNumber: this.numberOfPassengers,
  //     //     departureAPI: this.departureAPI,
  //     //     arrivalAPI: this.arrivalAPI,
  //        };
  //        localStorage.setItem("screendetails", JSON.stringify(dataStorage));
  //       this.showStorage = JSON.parse(localStorage.getItem("screendetails")!);
  //       console.log(dataStorage)
  // }

  onsubmit(){
    console.log(this.theatre)
    this.addtheater()
    // this.getDismissReason("save click");
  }
   addtheater(){
     this.ts.addtheater(this.theatre).subscribe(data=>{
      console.log(data)
        this.theatre=new Theater();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have added the theatre successfully',
          showConfirmButton: true
        }).then((result)=>{
          this.gettheatres();
        })
     },
     error=>console.log(error))
  }

  gettheatres(){
    this.ts.gettheater().subscribe(data=>{
      this.theatres=data;
      console.log(data)
    })
  }
  getMovies(){
    this.ms.getmovie().subscribe(data=>{
      this.movies=data;
    })
  }
  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
    this.screenData.push(items[i]);
    console.log(this.screenData)
  }

  deletepost(id:number){
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
        this.ts.deltheater(id).subscribe(data=>{
          console.log("deleted");
          Swal.fire(
            'Deleted!',
            'Your have have been deleted the theatre.',
            'success'
          )
          this.gettheatres();
        })
    
      }
      else if(result.dismiss==Swal.DismissReason.cancel){
        Swal.fire(
          'Cancelled',
          'Your theatre is safe',
          'error'
        )
    
      }
    })
    
    
    }

    update(id:number) {
      console.log(id);
       this.route.navigate([`updateTheatre/${id}`]);
    }
  
  //   localStorage.removeItem("flightdetails");
  //   let dataStorage = {
  //     departureDate: this.departureDate,
  //     returnDate: this.returnDate,
  //     departureAirport: this.departureAirport,
  //     arrivalAirport: this.destinationAirport,
  //     passengersNumber: this.numberOfPassengers,
  //     departureAPI: this.departureAPI,
  //     arrivalAPI: this.arrivalAPI,
  //   };
  //   localStorage.setItem("flightdetails", JSON.stringify(dataStorage));
  //   this.showStorage = JSON.parse(localStorage.getItem("flightdetails"));
  //   console.log(dataStorage)
  // }

  

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

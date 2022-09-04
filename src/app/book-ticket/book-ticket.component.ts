import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import Swal from "sweetalert2";
import { Ticket } from "../model/ticket";
import { TicketService } from "../services/ticket.service";


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  public ticket:Ticket=new Ticket();
   public tickets!:Ticket[];
   contentToConvert!:any
  constructor(private tk:TicketService, private route:Router, private activateRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.gettickets();
    // this.ticket.seats=localStorage.getItem("seat-name");
  }

  gettickets(){
    this.tk.getticket().subscribe(data=>{
      this.tickets=data;
    })
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
        this.tk.delticket(id).subscribe(data=>{
          console.log("deleted");
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.gettickets();
        })
    
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

    // public captureScreen() {
    //   var data = document.getElementById("contentToConvert");
    //   html2canvas(data).then(canvas => {
    //     // Few necessary setting options
    //     var imgWidth = 208;
    //     var pageHeight = 295;
    //     var imgHeight = (canvas.height * imgWidth) / canvas.width;
    //     var heightLeft = imgHeight;
  
    //     const contentDataURL = canvas.toDataURL("image/png");
    //     let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
    //     var position = 0;
    //     pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
    //     pdf.save("MYPdf.pdf"); // Generated PDF
    //   });
    // }
    
}

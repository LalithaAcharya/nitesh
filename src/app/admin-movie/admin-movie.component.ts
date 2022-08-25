import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
// import { FileHandle } from '../model/file-handel';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.css']
})
export class AdminMovieComponent implements OnInit {

  closeResult: string = '';
  public movie:Movie= new Movie();

  public movies!:Movie[];
 
  poster!: string;
  fileData: any;
 
  imageURL!: string;
  uploadForm!: FormGroup;
  
  imagePreviewSrc: any = '';
  isImageSelected: boolean = false;



  // mov:Movie={
  //   movie_id:0,
  //   movie_name:"",
  //   poster:"",
  //   director:"",
  //   hero:"",
  //   heroien:"",
  //   language:"",
  //   movieImages:[]

  // }
  
  constructor(public fb: FormBuilder, private modalService: NgbModal, private ms:MovieService, private route:Router, private activateRoute:ActivatedRoute,private sanitizer:DomSanitizer) { 
    // this.uploadForm = this.fb.group({
    //   avatar: [null],
    //   name: ['']
    // })
  }

  ngOnInit(): void {
    this.getdata();
  }

  onsubmit(){
    console.log(this.movies)
    this.addmovie()
  }
   addmovie(){
    // const movieFormData= this.prepareFormDate(this.movies)
     this.ms.addmovie(this.movie).subscribe(data=>{
      console.log(data)
        this.movie=new Movie();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have uploaded your movie successfully',
          showConfirmButton: true
        }).then((result)=>{
          this.getdata()
          this.route.navigate(['/adminMovie']);
        })
     },
     error=>console.log(error))
  }

  // prepareFormDate(mov:Movie):FormData {
  //   const formData=new FormData();

  //   formData.append(
  //     'movie',
  //     new Blob([JSON.stringify(mov)], {type: 'application/json'})
  //   );

  //   for(var i=0;i<mov.movieImages.length;i++){
  //     formData.append(
  //       'imageFile',
  //       mov.movieImages[i].file,
  //       mov.movieImages[i].file.name
  //     );
  //   }
  //   return formData;
  // }

  getdata(){
    this.ms.getmovie().subscribe(data=>{
      this.movies=data
      // this.employee=data
      // this.books=data;
      // this.books=data
      console.log(data)
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
        this.ms.delmovie(id).subscribe(data=>{
          console.log("deleted");
          Swal.fire(
            'Deleted!',
            'Your movie has been deleted.',
            'success'
          )
          this.getdata();
        })
    
      }
      else if(result.dismiss==Swal.DismissReason.cancel){
        Swal.fire(
          'Cancelled',
          'Your movie details is safe',
          'error'
        )
    
      }
    })

    
    
    }


    update(id:number) {
      console.log(id);
       this.route.navigate([`addMovie/${id}`]);
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

    // public onFileChange(event:any) {
    //   const reader = new FileReader();
    
    //   if (event.target.files && event.target.files.length) {
    //     this.fileName = event.target.files[0].name;
    //     const [file] = event.target.files;
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //       localStorage.setItem(this.fileName, reader.result as string);
    //       // console.log(fileData);
    //       console.log(this.fileName);
    //       // console.log(reader.result);
    //       this.movie.poster=this.fileName
    //     };
    //   }
    // }

    // showPreview(event:any) {
    //   const file = event.target.files[0];
    //   this.uploadForm.patchValue({
    //     avatar: file
    //   });
    //   // File Preview
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     this.imageURL = reader.result as string;
    //   }
    //   reader.readAsDataURL(file)
    //   this.movie.poster=this.imageURL;
    // }

    // public onFileChange(event:any) {
    //   if(event.target.files){
    //     const file=event.target.files[0];

    //     const fileHandle:FileHandle={
    //       file: file,
    //       url: this.sanitizer.bypassSecurityTrustUrl(
    //         window.URL.createObjectURL(file)
    //       )
    //     }
    //     this.mov.movieImages.push(fileHandle)
    //   }
    // }

    
  // showPreview(event: Event) {
  //   let selectedFile = (event.target as HTMLInputElement).files?.item(0)

  //   if (selectedFile) {
  //     if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile.type)) {
  //       let fileReader = new FileReader();
  //       fileReader.readAsDataURL(selectedFile);

  //       fileReader.addEventListener('load', (event) => {
  //         this.imagePreviewSrc = event.target?.result;
  //         this.isImageSelected = true
  //       })
        
  //     }
  //   } else {
  //     this.isImageSelected = false
  //   }
  //   this.movie.poster=this.imagePreviewSrc;
  // }

  // showPreview(event: any){
  //   const reader = new FileReader();

  //   if (event.target.files && event.target.files.length) {
  //     this.poster = event.target.files[0].SafeUrl;
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       localStorage.setItem(this.poster, reader.result as string);
  //       // console.log(fileData);
  //       console.log(this.poster);
  //       // console.log(reader.result);
  //       this.movie.poster=this.poster
  //     };
  //   }
  // }
}

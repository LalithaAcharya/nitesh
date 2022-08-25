
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theater } from '../model/theater';
import { TheaterService } from '../services/theater.service';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {
  public theatre:Theater= new Theater();
  id!:number;
  public theatres!:Theater[];
  constructor(private ts:TheaterService,private route:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id']
    this.ts.gettheaterbyid(this.id).subscribe(data=> {
      console.log(data)
      this.theatre=data
    },error=> console.log(error));
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  getData :any;
  buttonToggle : boolean = false;
  refData : any;
  jsonData : any;

  constructor(private api:ApiService) { }

   ngOnInit() {
   
  }

  airlines(){
    this.buttonToggle = true;
    this.api.getData().subscribe(data => {
      this.getData = data;
    });
  }

  flight(){
    this.buttonToggle = false;
  }

  getID(refData:any){
    localStorage.setItem("flightId",refData);
  }
}

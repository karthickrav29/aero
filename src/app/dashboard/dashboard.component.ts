import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
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
  isLoading : boolean = false;

  constructor(private api:ApiService) { }

   ngOnInit() {
   
  }

  airlines(){
    this.buttonToggle = true;
    this.api.getData().pipe(delay(2000)).subscribe(data => {
      this.getData = data;
      this.isLoading = true;
    })
  }

  flight(){
    this.buttonToggle = false;
  }

  getID(refData:any){
    localStorage.setItem("flightId",refData);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flightData : any;
  newData:any;
  flightId: any;
  finalData : any;
  count: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
   this.getData();  
  }


  getData(){
    this.api.getData().subscribe(data => {
      this.flightData = data;
      console.log(data);
      for( this.newData of this.flightData){
        this.flightId = localStorage.getItem('flightId');
        if(this.newData.flightdata){
          if(this.flightId == this.newData.id){
            this.finalData = this.newData.flightdata;
            this.count = this.finalData.length;
          }
        }
      } 
    });
  }
  

}

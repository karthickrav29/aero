import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentDate : any;
  currentTime : any;

  constructor(private date: DatePipe) {
    setInterval(() => {
      this.currentDate = this.date.transform((new Date), 'MM/dd/yyyy');
      this.currentTime = this.date.transform((new Date), 'h:mm:ss');
      // this.currentDateTime =this.date.transform((new Date), ' dd MM yyyy    hh:mm:ss');
    }, 1);
   }

  ngOnInit(): void {
  }

}

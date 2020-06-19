import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as sample1 from '../assets/sample1.json';
import * as sample2 from '../assets/sample2.json';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public week1 = true;
  public table:any = (sample1 as any).default;
  public days:any = ['Sunday','Monday','tuesday','Wednesday','Thursday','Friday','Saturday'];
  constructor() { 
  }

  sample1() {
    this.table = (sample1 as any).default;
    this.week1 = true;
  }
  sample2() {
    this.table = (sample2 as any).default;
    this.week1 = false;
  }

  timing( day, key, data) {
    let dataArray = data[key];
    let time = dataArray.find( res => {
      let split = res.split(' ')
      if ( split[0] === day) {
        let value = split[2];
        return value;
      } else {
        return "";
      }
    })
    if( time != undefined ) {
      let finalTime = time.split(" ");
      return(finalTime[2]+finalTime[3]+finalTime[4]+finalTime[5]+finalTime[6])
    }
  }

  ngOnInit(): void {
    // console.log(this.table.Bartender);
    
  }
  

}

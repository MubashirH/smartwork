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

  public table:any = (sample1 as any).default;
  public days:any = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  constructor() { 
  }

  sample1() {
    this.table = (sample1 as any).default;
  }
  sample2() {
    this.table = (sample2 as any).default;
  }

  timing( day, data) {
    if ( day = data.split(' ')[0]) {
      console.log(data);
    }
    // return time;
  }

  ngOnInit(): void {
    console.log(this.table);
    
  }
  

}

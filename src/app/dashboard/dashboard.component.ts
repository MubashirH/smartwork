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
  constructor() { 
  }

  sample1() {
    this.table = (sample1 as any).default;
  }
  sample2() {
    this.table = (sample2 as any).default;
  }

  ngOnInit(): void {
    console.log(this.table);
    
  }
  

}

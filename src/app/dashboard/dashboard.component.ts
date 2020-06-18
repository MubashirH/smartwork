import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as sample from '../assets/sample1.json';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public tableOne:any = (sample as any).default;
  public tableTwo:any = [];
  constructor(
    private httpClient: HttpClient
  ) { 
  }

  ngOnInit(): void {
    console.log(this.tableOne.Bartender);
    
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private mydata:any;
  public seriesData: number[] = [20, 40, 45, 30, 50];
    public categories: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  constructor() { 
    this.mydata = [ "20","10","50","30",52,60,10,5,80,3,120 ];
    
  }

  ngOnInit() {
  }

}

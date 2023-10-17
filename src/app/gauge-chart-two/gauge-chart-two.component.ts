import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-gauge-chart-two',
  templateUrl: './gauge-chart-two.component.html',
  styleUrls: ['./gauge-chart-two.component.scss']
})
export class GaugeChartTwoComponent implements OnInit {
  public chart: any;


  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  createChart(){

    this.chart = new Chart("MyChart", {
      type: "doughnut", //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
	       datasets: [{
    label: 'My First Dataset',
    data: [300, 240, 100, 432, 253, 34],
    backgroundColor: [
      'red',
      'pink',
      'green',
			'yellow',
      'orange',
      'blue',
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }



}

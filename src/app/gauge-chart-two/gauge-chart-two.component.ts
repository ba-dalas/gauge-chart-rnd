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

  createChart() {

    const gaugeChartText ={
      id:'gaugeChartText',
      afterDatasetsDraw(chart:any, args:any , pluginsOption:any){
       const {ctx , data , chartArea:{top , bottom , left , right , width , height},scales:{r} } = chart
       ctx.save()
      //  console.log(chart.getDatasetMeta(0).data[0].x)
       const xCoor =chart.getDatasetMeta(0).data[0].x
       const yCoor =chart.getDatasetMeta(0).data[0].y
       const score =data.datasets[0].data[0]

       ctx.fillRect(xCoor , yCoor, 400, 1)
       ctx.font ='20px sans-serif'
       ctx.fillStyle= '#666'
       ctx.textBaseLine='top'

       ctx.textAlign='left'
       ctx.fillText('300', left , yCoor + 20)

       ctx.textAlign='right'
       ctx.fillText('850', right - 20 , yCoor + 20)

       ctx.font ='150px sans-serif'
       ctx.textAlign='center'
       ctx.textBaseLine='bottom'
       ctx.fillText(score, xCoor , yCoor )

       ctx.font ='150px sans-serif'
       ctx.textAlign='center'
       ctx.textBaseLine='bottom'
       ctx.fillText('Fair', xCoor , yCoor - 120 )
      }
    }


    this.chart = new Chart("MyChart", {
      type: "doughnut", //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Red', 'Pink', 'Green', 'Yellow', 'Orange', 'Blue',],
        datasets: [{
          label: 'My First Dataset',
          data: [650 , 200],
          backgroundColor: [
            'red',
            'pink',
            'green',
            'yellow',
            'orange',
            'blue',
          ],
          hoverOffset: 4,

        }],

      },
      options: {
        aspectRatio: 1.5,
        cutout:'90%',
        circumference:180,
        rotation:270,


      },
      plugins:[gaugeChartText]


    });



  }






}

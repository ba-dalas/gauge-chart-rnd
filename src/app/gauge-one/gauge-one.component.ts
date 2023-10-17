import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';




@Component({
  selector: 'app-gauge-one',
  templateUrl: './gauge-one.component.html',
  styleUrls: ['./gauge-one.component.scss']
})
export class GaugeOneComponent  implements OnInit {

  gaugeType = 'full';
  gaugeThick = 50;
  gaugevalue = 150;
  gaugemax = 2000;
  gaugethresholds = {
    '0': { color: 'green' },
    '500': { color: 'orange' },
    '1000': { color: 'orangeRed' },
    '1500': { color: 'red' }
  };


  ngOnInit(): void {}




}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';




@Component({
  selector: 'app-gauge-one',
  templateUrl: './gauge-one.component.html',
  styleUrls: ['./gauge-one.component.scss']
})
export class GaugeOneComponent  implements OnInit {


  gaugeType = 'semi';
  gaugeValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";


  ngOnInit(): void {}




}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeChartTwoComponent } from './gauge-chart-two.component';

describe('GaugeChartTwoComponent', () => {
  let component: GaugeChartTwoComponent;
  let fixture: ComponentFixture<GaugeChartTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaugeChartTwoComponent]
    });
    fixture = TestBed.createComponent(GaugeChartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  @Input()
  value: number = 0;

  @Input()
  valueDisplay: string = '';

  @Input()
  text: string = '';

  @Input()
  color: string = '#5664F9';

  constructor() { }

  ngOnInit(): void {
    // Enable css animation
    const realValue = this.value;
    this.value = 0;
    setTimeout(() => {
      this.value = realValue;
    }, 0);
  }

  // Calculate rotation degrees
  getTransform(value: number): string {
    if (value < 0) value = 0;
    if (value > 1) value = 1;
    let deg = 180 * value - 180;
    return `rotate(${deg}deg)`;
  }

}

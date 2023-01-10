import { Component, Input } from '@angular/core';
import { AsyncPipe, NgStyle } from '@angular/common';
import { BehaviorSubject, delay, map, Observable } from 'rxjs';

@Component({
  selector: 'app-gauge',
  standalone: true,
  imports: [NgStyle, AsyncPipe],
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent {

  @Input()
  set value(val: number) {
    this.valueSubject.next(val);
  }

  @Input()
  valueDisplay: string = '';

  @Input()
  text: string = '';

  @Input()
  color: string = '#5664F9';

  protected readonly transformValue$: Observable<string>;
  private readonly valueSubject: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.transformValue$ = this.valueSubject.pipe(
      // Enable css animation
      delay(100),
      map((val: number) => this.getTransform(val))
    );
  }

  // Calculate rotation degrees
  private getTransform(value: number): string {
    if (value < 0) value = 0;
    if (value > 1) value = 1;
    const deg = 180 * value - 180;
    return `rotate(${deg}deg)`;
  }

}

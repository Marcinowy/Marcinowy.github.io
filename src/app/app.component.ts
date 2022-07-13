import { Component } from '@angular/core';
import { ProgressBarService } from './services/progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  barVisibile: boolean = false;

  constructor(
    private progressBarService: ProgressBarService,
  ) {
    this.progressBarService.getBarVisibility().subscribe((data) => {
      Promise.resolve().then(() => this.barVisibile = data);
    });
  }
}

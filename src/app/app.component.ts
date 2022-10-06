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
      // This allows ChangeDetector to detect changes without calling detectChanges()
      Promise.resolve().then(() => this.barVisibile = data);
    });
  }
}

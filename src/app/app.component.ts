import { Component } from '@angular/core';
import { ProgressBarService } from './services/progress-bar.service';
import { Observable } from 'rxjs';
import { Event, NavigationCancel, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected readonly progressBarVisible$: Observable<boolean>;

  constructor(
    private readonly progressBarService: ProgressBarService,
		private readonly router: Router
  ) {
    this.progressBarVisible$ = this.progressBarService.getBarVisibility();
    this.listenOnRouteChange();
  }

  private listenOnRouteChange(): void {
		this.router.events.pipe(untilDestroyed(this)).subscribe((event: Event): void => {
			if (event instanceof RouteConfigLoadStart) {
        this.progressBarService.setBarVisibility(true);
			} else if (event instanceof RouteConfigLoadEnd || event instanceof NavigationCancel) {
        this.progressBarService.setBarVisibility(false);
			}
		});
  }
}

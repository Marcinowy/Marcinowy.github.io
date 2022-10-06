import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private visibilityCount: number = 0;
  private barVisibilitySubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  /**
   * Updates progress bar visibility. If there is more than one update, the service count all updates
   *
   * @param {boolean} status - true: show progress bar, false: hide progress bar
   */
  setBarVisibility(status: boolean): void {
    // calculate requests count
    this.visibilityCount += status ? 1 : -1;

    // emit changes
    this.barVisibilitySubject.next(this.visibilityCount > 0);
  }

  /**
   * Returns bar visibility as Observable object
   *
   * @returns {Observable<boolean>} Bar visibility as Observable object
   */
  getBarVisibility(): Observable<boolean> {
    return this.barVisibilitySubject.asObservable();
  }
}

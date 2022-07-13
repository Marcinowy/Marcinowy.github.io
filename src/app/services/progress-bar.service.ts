import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private visibilityCount: number = 0;
  private barVisibilitySubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  setBarVisibility(status: boolean): void {
    if (status) {
      this.visibilityCount++;
    } else {
      this.visibilityCount--;
      if (this.visibilityCount < 0) {
        this.visibilityCount = 0;
      }
    }
    this.barVisibilitySubject.next(this.visibilityCount > 0);
  }

  getBarVisibility(): Observable<boolean> {
    return this.barVisibilitySubject.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, Subject } from 'rxjs';
import { MessageService } from './message.service';
import { ProgressBarService } from './progress-bar.service';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(
    private progressBarService: ProgressBarService,
  ) { }

  /**
   * Performs fake API call and return provided value as Promise
   *
   * @param {string} path - Not used in fake call
   * @param {'get' | 'post' | 'delete' | 'put'} method - Not used in fake call
   * @param {T} defaultValue - Value to be returned as Promise
   * @param {any} body - Not used in fake call
   * @returns {Promise<T>} The value provided in defaultValue argument
   */
  async fakeApiCall<T>(
    path: string,
    method: 'get' | 'post' | 'delete' | 'put' = 'get',
    defaultValue: T,
    body: any = {}
  ): Promise<T> {
    this.progressBarService.setBarVisibility(true);

    const request$ = this.fakeDelay<T>(defaultValue);

    const response = await firstValueFrom(request$);
    this.progressBarService.setBarVisibility(false);
    return response;
  }

  /**
   * Simulate delay when getting data from server
   *
   * @param {T} fakeResponse - Value to be returned as Observable
   * @returns {Observable<T>} The value provided in fakeResponse argument
   */
  private fakeDelay<T>(fakeResponse: T): Observable<T> {
    let fakeRequest$ = new Subject<T>();
    setTimeout(() => {
      fakeRequest$.next(fakeResponse);
    }, 1000);
    return fakeRequest$.asObservable();
  }

}

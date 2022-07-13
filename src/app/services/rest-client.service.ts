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

  async apiCall<T>(
    path: string,
    method: 'get' | 'post' | 'delete' | 'put' = 'get',
    defaultValue: T,
    body: any = {}
  ): Promise<T> {
    this.progressBarService.setBarVisibility(true);

    let request$ = this.fakeApiCall<T>(defaultValue);

    let response = await firstValueFrom(request$);
    this.progressBarService.setBarVisibility(false);
    return response;
  }

  private fakeApiCall<T>(fakeResponse: T): Observable<T> {
    let fakeRequest$ = new Subject<T>();
    setTimeout(() => {
      fakeRequest$.next(fakeResponse);
    }, 1000);
    return fakeRequest$.asObservable();
  }

}

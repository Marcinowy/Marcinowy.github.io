import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private progressBarService: ProgressBarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.progressBarService.setBarVisibility(true);
    return next.handle(request).pipe(tap({
      complete: () => {
        this.progressBarService.setBarVisibility(false);
      }
    }));
  }
}

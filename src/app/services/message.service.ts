import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  pushMessage(message: string, button: string | undefined = undefined, duration: number | undefined = 3000): void {
    this.snackBar.open(message, button, {
      duration: duration
    });
  }
}

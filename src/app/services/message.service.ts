import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }


  /**
   * Show message as snackBar to user
   *
   * @param {string} message - The message to show in the snackbar.
   * @param {string} button - The label for the snackbar action.
   * @param {number | undefined} [duration=3000] - Duration of a snackbar.
   */
  pushMessage(message: string, button: string | undefined = undefined, duration: number | undefined = 3000): void {
    this.snackBar.open(message, button, {
      duration: duration
    });
  }
}

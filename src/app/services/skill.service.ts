import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where, orderBy } from '@angular/fire/firestore';
import { Query } from 'rxfire/firestore/interfaces';
import { catchError, Observable, map, of, tap, take } from 'rxjs';
import { Skill } from '../modules/skills/models/skill';
import { SkillType } from '../modules/skills/models/skillType';
import { MessageService } from './message.service';
import { ProgressBarService } from './progress-bar.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private progressBarService: ProgressBarService,
    private messageService: MessageService,
    private firestore: Firestore
  ) { }

  /**
   * Returns types of skills from firestore database
   *
   * @returns {Observable<string[]>} List of skill types as Observable object
   */
  getTypes(): Observable<string[]> {
    const ref = collection(this.firestore, 'skillTypes') as Query<SkillType>;
    const data = query(ref, orderBy('order'));
    this.progressBarService.setBarVisibility(true);

    return collectionData(data).pipe(
      take(1),
      map((types: SkillType[]) => types.map(type => type.name)),
      tap(() => this.progressBarService.setBarVisibility(false)),
      catchError(() => {
        this.messageService.pushMessage('Something went wrong', false);
        return of([]);
      })
    );
  }

  /**
   * Returns skills from firestore database
   *
   * @param {string} skillType - Type of skill to filter
   *
   * @returns {Observable<Skill[]>} List of Skills as Observable object
   */
  getSkills(skillType: string): Observable<Skill[]> {
    const ref = collection(this.firestore, 'skills') as Query<Skill>;
    const data = query(ref, where('type', '==', skillType), orderBy('order'));
    this.progressBarService.setBarVisibility(true);

    return collectionData(data).pipe(
      take(1),
      tap(() => this.progressBarService.setBarVisibility(false)),
      catchError(() => {
        this.messageService.pushMessage('Something went wrong', false);
        return of([]);
      })
    );
  }

}

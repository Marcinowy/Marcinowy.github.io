import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where, orderBy } from '@angular/fire/firestore';
import { Query } from 'rxfire/firestore/interfaces';
import { Observable, map } from 'rxjs';
import { Skill } from '../models/skill';
import { SkillType } from '../models/skillType';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private firestore: Firestore) { }

  /**
   * Returns types of skills from firestore database
   *
   * @returns {Observable<string[]>} List of skill types as Observable object
   */
  getTypes(): Observable<string[]> {
    const ref = collection(this.firestore, 'skillTypes') as Query<SkillType>;
    const data = query(ref, orderBy('order'));
    return collectionData(data).pipe(
      map((types: SkillType[]) => types.map(type => type.name))
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
    return collectionData(data);
  }

}

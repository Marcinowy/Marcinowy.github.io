import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { firstValueFrom, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  protected skills: Skill[] = [];
  protected selectedType: string = '';
  protected readonly types$: Observable<string[]>;

  constructor(private skillService: SkillService) {
    this.types$ = this.skillService.getTypes().pipe(
      tap((types: string[]) => {
        this.changeType(types[0]);
      })
    );
  }

  changeType(type: string): void {
    this.selectedType = type;

    // load skills only one time for each type
    !this.isTypeSkillsLoaded(type) && this.loadSkills(type);
  }

  private async loadSkills(type: string): Promise<void> {
    // fetch skills data for type
    const skills$ = this.skillService.getSkills(type);
    const skills = await firstValueFrom(skills$);

    // append data to array
    this.skills = [...this.skills, ...skills];
  }

  private isTypeSkillsLoaded(type: string): boolean {
    const loadedTypes = this.skills.map(el => el.type);

    return loadedTypes.includes(type);
  }

}

import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { MessageService } from 'src/app/services/message.service';
import { ProgressBarService } from 'src/app/services/progress-bar.service';
import { SkillService } from 'src/app/services/skill.service';
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  types: string[] = [];
  selectedType: string = '';

  constructor(
    private progressBarService: ProgressBarService,
    private messageService: MessageService,
    private skillService: SkillService,
  ) {
  }

  ngOnInit(): void {
    this.loadTypes();
  }

  async changeType(type: string): Promise<void> {
    this.selectedType = type;

    // load skills only one time for each type
    !this.isTypeSkillsLoaded(type) && this.loadSkills(type);
  }

  private async loadTypes(): Promise<void> {

    this.progressBarService.setBarVisibility(true);
    try {
      // fetch skill types data
      const types$ = this.skillService.getTypes();
      this.types = await firstValueFrom(types$);

      // select first skill type
      this.changeType(this.types[0]);
    } catch (error: any) {
      this.messageService.pushMessage('Something went wrong', false);
    } finally {
      this.progressBarService.setBarVisibility(false);
    }

  }

  private async loadSkills(type: string): Promise<void> {

    this.progressBarService.setBarVisibility(true);
    try {
      // fetch skills data for type
      const skills$ = this.skillService.getSkills(type);
      const skills = await firstValueFrom(skills$);

      // append data to array
      this.skills = [...this.skills, ...skills];
    } catch (error: any) {
      this.messageService.pushMessage('Something went wrong', false);
    } finally {
      this.progressBarService.setBarVisibility(false);
    }

  }

  private isTypeSkillsLoaded(type: string): boolean {
    const loadedTypes = this.skills.map(el => el.type);

    return loadedTypes.includes(type);
  }

}

import { Component, isDevMode, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { MessageService } from 'src/app/services/message.service';
import { ProgressBarService } from 'src/app/services/progress-bar.service';
import { RestClientService } from 'src/app/services/rest-client.service';
import { skillsFakeApiData } from 'src/environments/environment';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  types: string[] = [];
  selectedType: string = '';

  // Remember to edit following line to make it work with normal api client
  defaultSkillsResponse: Skill[] = isDevMode() ? skillsFakeApiData : skillsFakeApiData;

  constructor(
    private progressBarService: ProgressBarService,
    private messageService: MessageService,
    private restClientService: RestClientService,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  private async loadData(): Promise<void> {
    this.progressBarService.setBarVisibility(true);
    try {
      this.skills = await this.restClientService.fakeApiCall('/skills', 'get', this.defaultSkillsResponse);
      this.types = this.getTypes(this.skills);

      // select first skill type
      this.selectedType = this.types[0];
    } catch (error: any) {
      this.messageService.pushMessage('Something went wrong');
    } finally {
      this.progressBarService.setBarVisibility(false);
    }
  }

  private getTypes(skills: Skill[]): string[] {
    const types = skills.map(e => e.type);

    // get only unique types of skills
    return types.filter((v, i, s) => s.indexOf(v) === i);
  }

}

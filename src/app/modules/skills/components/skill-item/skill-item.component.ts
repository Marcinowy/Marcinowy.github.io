import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/modules/skills/models/skill';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {

  @Input()
  skill: Skill | null = null;

  constructor() { }

}

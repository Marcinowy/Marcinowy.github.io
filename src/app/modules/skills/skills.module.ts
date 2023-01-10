import { NgModule } from '@angular/core';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GaugeComponent } from 'src/app/shared/components/gauge/gauge.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillItemComponent
  ],
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    SkillsRoutingModule,
    MatButtonModule,
    MatCardModule,
    GaugeComponent
  ]
})
export class SkillsModule { }

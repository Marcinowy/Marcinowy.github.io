import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { firstValueFrom, of } from 'rxjs';
import { SkillService } from 'src/app/services/skill.service';
import { Firestore } from '@angular/fire/firestore';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let de: DebugElement;

  let service: SkillService;
  let spyGetTypes: jasmine.Spy;
  let spyGetSkills: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ],
      imports: [ MatSnackBarModule ],
      providers: [ SkillService, { provide: Firestore, useValue: {} } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    service = de.injector.get(SkillService);
    spyGetTypes = spyOn(service, 'getTypes').and.returnValue(of(['a', 'b', 'c']));
    spyGetSkills = spyOn(service, 'getSkills').and.callFake((type: string) => of([
      { name: '1', image: '3', expTime: 12, knowledge: 1, type: type },
      { name: '2', image: '4', expTime: 6, knowledge: 0, type: type },
    ]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get types on init', async () => {
    await fixture.whenStable();
    expect(spyGetTypes).toHaveBeenCalledTimes(1);
    expect(await firstValueFrom(component['types$'])).toEqual(['a', 'b', 'c']);
  });

  it('should set type on init', async () => {
    await fixture.whenStable();
    expect(component['selectedType']).not.toBe('');
  });

  it('should get skills on init', async () => {
    await fixture.whenStable();
    expect(component['skills']).not.toEqual([]);
  });

  it('should get skills on init with type', async () => {
    await fixture.whenStable();
    expect(spyGetSkills).toHaveBeenCalledOnceWith('a');
  });

  it('should fetch new type data', async () => {
    await fixture.whenStable();
    component.changeType('c');
    await fixture.whenStable();
    expect(component['skills'].length).toBe(4);
  });

  it('should not fetch same type again', async () => {
    await fixture.whenStable();
    component.changeType('a');
    await fixture.whenStable();
    expect(component['skills'].length).toBe(2);
  });
});

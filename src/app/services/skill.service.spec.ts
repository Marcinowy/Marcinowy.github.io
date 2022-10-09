import { TestBed } from '@angular/core/testing';
import { Firestore, collectionData, collection, query, where, orderBy } from '@angular/fire/firestore';

import { SkillService } from './skill.service';

describe('SkillService', () => {
  let service: SkillService;

  const serviceStub = {
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [  ],
      providers: [{ provide: Firestore, useValue: serviceStub }]
    });
    service = TestBed.inject(SkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

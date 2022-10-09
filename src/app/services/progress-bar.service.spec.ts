import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { ProgressBarService } from './progress-bar.service';

describe('ProgressBarService', () => {
  let service: ProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not be visible without overlapping', async () => {
    const random = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    for (let i = 0; i < random; i++) {
      service.setBarVisibility(true);
      service.setBarVisibility(false);
    }
    const barVisibility = await firstValueFrom(service.getBarVisibility());
    expect(barVisibility).toBeFalse();
  });

  it('should not be visible with overlapping', async () => {
    const random = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    for (let i = 0; i < random; i++) {
      service.setBarVisibility(true);
    }
    for (let i = 0; i < random; i++) {
      service.setBarVisibility(false);
    }
    const barVisibility = await firstValueFrom(service.getBarVisibility());
    expect(barVisibility).toBeFalse();
  });

  it('should be visible without overlapping', async () => {
    const random = Math.floor(Math.random() * (30 - 1 + 1)) + 1;

    service.setBarVisibility(true);
    for (let i = 0; i < random; i++) {
      service.setBarVisibility(true);
      service.setBarVisibility(false);
    }

    const barVisibility = await firstValueFrom(service.getBarVisibility());
    expect(barVisibility).toBeTrue();
  });

  it('should be visible with overlapping', async () => {
    const random = Math.floor(Math.random() * (30 - 1 + 1)) + 1;

    service.setBarVisibility(true);
    for (let i = 0; i < random; i++) {
      service.setBarVisibility(true);
    }
    for (let i = 0; i < random; i++) {
      service.setBarVisibility(false);
    }

    const barVisibility = await firstValueFrom(service.getBarVisibility());
    expect(barVisibility).toBeTrue();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { UpdateWeatherService } from './update-weather.service';

describe('UpdateWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateWeatherService]
    });
  });

  it('should be created', inject([UpdateWeatherService], (service: UpdateWeatherService) => {
    expect(service).toBeTruthy();
  }));
});

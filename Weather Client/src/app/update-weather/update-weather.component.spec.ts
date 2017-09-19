import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWeatherComponent } from './update-weather.component';

describe('UpdateWeatherComponent', () => {
  let component: UpdateWeatherComponent;
  let fixture: ComponentFixture<UpdateWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

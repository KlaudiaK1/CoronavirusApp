import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCovidStatsComponent } from './global-covid-stats.component';

describe('GlobalCovidStatsComponent', () => {
  let component: GlobalCovidStatsComponent;
  let fixture: ComponentFixture<GlobalCovidStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCovidStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCovidStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

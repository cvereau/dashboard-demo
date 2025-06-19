import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetSummaryCardComponent } from './timesheet-summary-card.component';

describe('TimesheetSummaryCardComponent', () => {
  let component: TimesheetSummaryCardComponent;
  let fixture: ComponentFixture<TimesheetSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesheetSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

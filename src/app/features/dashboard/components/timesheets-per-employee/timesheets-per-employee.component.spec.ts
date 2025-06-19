import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetsPerEmployeeComponent } from './timesheets-per-employee.component';

describe('TimesheetsPerEmployeeComponent', () => {
  let component: TimesheetsPerEmployeeComponent;
  let fixture: ComponentFixture<TimesheetsPerEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesheetsPerEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetsPerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

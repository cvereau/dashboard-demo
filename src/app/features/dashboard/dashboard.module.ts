import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { OverallHoursCardComponent } from './components/overall-hours-card/overall-hours-card.component';
import { HoursPerProjectCardComponent } from './components/hours-per-project-card/hours-per-project-card.component';
import { TimesheetSummaryCardComponent } from './components/timesheet-summary-card/timesheet-summary-card.component';
import { TimesheetsPerEmployeeComponent } from './components/timesheets-per-employee/timesheets-per-employee.component';
import { HoursPerEmployeeComponent } from './components/hours-per-employee/hours-per-employee.component';

import { OverallHoursService } from './services/overall-hours.service';
import { HoursPerProjectService } from './services/hours-per-project.service';
import { TimesheetSummaryService } from './services/timesheet-summary.service';
import { TimesheetsPerEmployeeService } from './services/timesheets-per-employee.service';
import { HoursPerEmployeeService } from './services/hours-per-employee.service';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    DashboardHeaderComponent,
    OverallHoursCardComponent,
    HoursPerProjectCardComponent,
    TimesheetSummaryCardComponent,
    TimesheetsPerEmployeeComponent,
    HoursPerEmployeeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    OverallHoursService,
    HoursPerProjectService,
    TimesheetSummaryService,
    TimesheetsPerEmployeeService,
    HoursPerEmployeeService
  ]
})
export class DashboardModule {}

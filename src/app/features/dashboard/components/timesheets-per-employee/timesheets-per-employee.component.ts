import { Component, inject, OnInit } from '@angular/core';
import { AgBarSeriesItemStylerParams, AgChartOptions } from 'ag-charts-community';
import { TimesheetsPerEmployeeService } from '../../services/timesheets-per-employee.service';
import { tap } from 'rxjs';
import { TimesheetsPerEmployeeData } from '../../../../shared/models';

@Component({
  selector: 'app-timesheets-per-employee',
  templateUrl: './timesheets-per-employee.component.html',
  styleUrl: './timesheets-per-employee.component.scss',
})
export class TimesheetsPerEmployeeComponent implements OnInit {
  chartOptions: AgChartOptions = {
    data: [],
    series: [],
  };

  private _timesheetPerEmployee: TimesheetsPerEmployeeService = inject(TimesheetsPerEmployeeService);

  ngOnInit(): void {
    this._timesheetPerEmployee
      .getTimesheetsPerEmployee()
      .pipe(tap((res) => this.setTimesheetPerEmployeeData(res)))
      .subscribe();
  }

  private setTimesheetPerEmployeeData(data: TimesheetsPerEmployeeData[]): void {
    this.chartOptions = {
      data: [...data],
      series: [
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'project',
          yKey: 'tracked',
          yName: 'Timesheets tracked',
          fill: '#00bcf3',
          stacked: true,
        },
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'project',
          yKey: 'expected',
          yName: 'Timesheets expected',
          fill: '#eee',
          stacked: true,
        },
      ],
    };
  }
}

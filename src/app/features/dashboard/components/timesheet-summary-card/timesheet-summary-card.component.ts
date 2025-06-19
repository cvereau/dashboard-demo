import { Component, inject, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { TimesheetSummaryData } from '../../../../shared/models';
import { TimesheetSummaryService } from '../../services/timesheet-summary.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-timesheet-summary-card',
  templateUrl: './timesheet-summary-card.component.html',
  styleUrl: './timesheet-summary-card.component.scss',
})
export class TimesheetSummaryCardComponent implements OnInit {
  chartOptions: AgChartOptions = {
    data: [],
    series: [],
  };

  private _timesheetSummaryService: TimesheetSummaryService = inject(TimesheetSummaryService);

  ngOnInit(): void {
    this.getTimesheetSummaryData();
  }

  getTimesheetSummaryData(): void {
    this._timesheetSummaryService
      .getTimesheetSummary()
      .pipe(
        tap((res) => {
          this.setTimesheetSummaryData(res);
        })
      )
      .subscribe();
  }

  private setTimesheetSummaryData(data: TimesheetSummaryData): void {
    const tracked = data?.tracked || 0;
    const expected = data?.expected || 0;
    const percentage = Math.round((tracked / expected) * 100);

    this.chartOptions = {
      data: [
        { asset: 'Tracked', amount: tracked },
        { asset: 'Remaining', amount: expected - tracked },
      ],
      series: [
        {
          type: 'donut',
          calloutLabelKey: 'asset',
          calloutLabel: {
            enabled: false,
          },
          angleKey: 'amount',
          fills: ['#051838', '#00bcf3'],
          innerRadiusRatio: 0.7,
          innerLabels: [
            {
              text: `${percentage}%`,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#333',
            },
            {
              text: 'Tracked',
              spacing: 4,
              fontSize: 14,
            },
          ],
        },
      ],
    };
  }
}

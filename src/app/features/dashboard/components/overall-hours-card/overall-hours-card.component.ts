import { Component, inject, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { OverallHoursData } from '../../../../shared/models';
import { OverallHoursService } from '../../services/overall-hours.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-overall-hours-card',
  templateUrl: './overall-hours-card.component.html',
  styleUrl: './overall-hours-card.component.scss',
})
export class OverallHoursCardComponent implements OnInit {
  chartOptions: AgChartOptions = {
    data: [],
    series: [],
  };

  private _overallHoursService: OverallHoursService = inject(OverallHoursService);

  ngOnInit(): void {
    this.getOverallhoursData();
  }

  getOverallhoursData(): void {
    this._overallHoursService
      .getOverallHours()
      .pipe(
        tap((res) => {
          this.setOverAllhoursData(res);
        })
      )
      .subscribe();
  }

  private setOverAllhoursData(data: OverallHoursData): void {
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

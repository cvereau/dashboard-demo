import { Component, inject, OnInit } from '@angular/core';
import { AgBarSeriesItemStylerParams, AgChartOptions } from 'ag-charts-community';
import { HoursPerProjectService } from '../../services/hours-per-project.service';
import { tap } from 'rxjs';
import { HoursPerProjectData } from '../../../../shared/models';

@Component({
  selector: 'app-hours-per-project-card',
  templateUrl: './hours-per-project-card.component.html',
  styleUrl: './hours-per-project-card.component.scss',
})
export class HoursPerProjectCardComponent implements OnInit {
  chartOptions: AgChartOptions = {
    data: [],
    series: [],
  };

  private _overallHoursService: HoursPerProjectService = inject(HoursPerProjectService);

  ngOnInit(): void {
    this.getHoursPerProjectData();
  }

  getHoursPerProjectData(): void {
    this._overallHoursService
      .getHoursByProject()
      .pipe(
        tap((res) => {
          this.setHoursPerProjectData(res);
        })
      )
      .subscribe();
  }

  private setHoursPerProjectData(data: HoursPerProjectData[]): void {
    this.chartOptions = {
      data: [...data],
      series: [
        {
          type: 'bar',
          xKey: 'project',
          yKey: 'hours',
          yName: 'Hours allocated',
          fill: '#eee',
          cornerRadius: 10,
          label: {
            enabled: true,
            placement: 'outside',
            fontWeight: 'bold',
            fontSize: 10,
            color: '#333',
          },
          itemStyler: (params: AgBarSeriesItemStylerParams<any>) => {
            return {
              fill: params.datum.color,
            };
          },
        } as any,
      ],
    };
  }
}

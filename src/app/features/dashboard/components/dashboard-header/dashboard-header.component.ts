import { Component, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class DashboardHeaderComponent implements OnInit {
  selectedRange: DateRange<Date> = new DateRange<Date>(null, null);
  private _dateRangeLabel = 'Pick a date range';

  ngOnInit(): void {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    this.selectedRange = new DateRange(thirtyDaysAgo, today);
  }

  getDateRangeLabel(): string {
    const { start, end } = this.selectedRange;

    if (start && end) {
      this._dateRangeLabel = `${this.formatDate(start)} – ${this.formatDate(end)}`;
      return this._dateRangeLabel;
    }

    return this._dateRangeLabel;
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  }
}

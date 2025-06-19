import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TimesheetSummaryData } from '../../../shared/models';
import { Observable } from 'rxjs';

@Injectable()
export class TimesheetSummaryService {
  private _http: HttpClient = inject(HttpClient);

  getTimesheetSummary(): Observable<TimesheetSummaryData> {
    return this._http.get<TimesheetSummaryData>('/api/timesheet-summary');
  }
}

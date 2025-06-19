import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimesheetsPerEmployeeData } from '../../../shared/models';

@Injectable()
export class TimesheetsPerEmployeeService {
  private _http: HttpClient = inject(HttpClient);

  getTimesheetsPerEmployee(): Observable<TimesheetsPerEmployeeData[]> {
    return this._http.get<TimesheetsPerEmployeeData[]>('/api/timesheet-per-employee');
  }
}

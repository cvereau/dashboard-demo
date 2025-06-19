import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HoursPerEmployeeData } from '../../../shared/models';
import { Observable } from 'rxjs';

@Injectable()
export class HoursPerEmployeeService {
  private _http: HttpClient = inject(HttpClient);

  getHoursByEmployee(): Observable<HoursPerEmployeeData[]> {
    return this._http.get<HoursPerEmployeeData[]>('/api/hours-per-employee');
  }
}

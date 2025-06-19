import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OverallHoursData } from '../../../shared/models';
import { Observable } from 'rxjs';

@Injectable()
export class OverallHoursService {
  private _http: HttpClient = inject(HttpClient);

  getOverallHours(): Observable<OverallHoursData> {
    return this._http.get<OverallHoursData>('/api/overall-hours');
  }
}

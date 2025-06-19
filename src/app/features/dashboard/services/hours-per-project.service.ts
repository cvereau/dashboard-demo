import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HoursPerProjectData } from '../../../shared/models';
import { Observable } from 'rxjs';

@Injectable()
export class HoursPerProjectService {
  private _http: HttpClient = inject(HttpClient);

  getHoursByProject(): Observable<HoursPerProjectData[]> {
    return this._http.get<HoursPerProjectData[]>('/api/hours-per-project');
  }
}

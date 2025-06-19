import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  MOCK_HOURS_PER_EMPLOYEE,
  MOCK_HOURS_PER_PROJECT,
  MOCK_OVERALL_HOURS,
  MOCK_TIMESHEET_PER_EMPLOYEE,
  MOCK_TIMESHEET_SUMMARY,
} from './mock-data';

@Injectable()
export class MockApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('/api/')) {
      if (req.method === 'GET' && req.url === '/api/overall-hours') {
        return of(new HttpResponse({ status: 200, body: MOCK_OVERALL_HOURS })).pipe(delay(300));
      }

      if (req.method === 'GET' && req.url === '/api/hours-per-project') {
        return of(new HttpResponse({ status: 200, body: MOCK_HOURS_PER_PROJECT })).pipe(delay(300));
      }

      if (req.method === 'GET' && req.url === '/api/timesheet-summary') {
        return of(new HttpResponse({ status: 200, body: MOCK_TIMESHEET_SUMMARY })).pipe(delay(300));
      }

      if (req.method === 'GET' && req.url === '/api/timesheet-per-employee') {
        return of(new HttpResponse({ status: 200, body: MOCK_TIMESHEET_PER_EMPLOYEE })).pipe(delay(300));
      }

      if (req.method === 'GET' && req.url === '/api/hours-per-employee') {
        return of(new HttpResponse({ status: 200, body: MOCK_HOURS_PER_EMPLOYEE })).pipe(delay(300));
      }
    }
    return next.handle(req);
  }
}

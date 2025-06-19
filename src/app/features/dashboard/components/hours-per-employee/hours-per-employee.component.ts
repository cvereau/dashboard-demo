import { Component, inject, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { HoursPerEmployeeService } from '../../services/hours-per-employee.service';
import { HoursPerEmployeeData } from '../../../../shared/models';
import { tap } from 'rxjs';

@Component({
  selector: 'app-hours-per-employee',
  templateUrl: './hours-per-employee.component.html',
  styleUrl: './hours-per-employee.component.scss',
})
export class HoursPerEmployeeComponent implements OnInit {
  gridOptions: GridOptions = {
    defaultColDef: {
      flex: 1,
    },
    columnDefs: [
      { field: 'employee', headerName: 'Employee' },
      { field: 'tracked', headerName: '% Tracked Hours' },
      { field: 'totalTracked', headerName: 'Total Tracked Hours' },
      { field: 'expected', headerName: 'Expected Hours' },
      { field: 'totalSRED', headerName: 'Total SR&ED Hours' },
      { field: 'SREDPercentage', headerName: 'SR&ED %' },
    ],
    pagination: true,
    paginationPageSize: 5,
  };

  rowData: HoursPerEmployeeData[] = [];

  private _hoursPerEmployeeService: HoursPerEmployeeService = inject(HoursPerEmployeeService);

  ngOnInit(): void {
    this._hoursPerEmployeeService
      .getHoursByEmployee()
      .pipe(
        tap((res) => {
          this.setHoursPerEmployeeData(res);
        })
      )
      .subscribe();
  }

  private setHoursPerEmployeeData(data: HoursPerEmployeeData[]): void {
    this.rowData = [...data];
  }
}

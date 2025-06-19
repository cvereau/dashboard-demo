import { AfterViewInit, ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MenuItem } from '../../models';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebar!: MatSidenav;
  isMobile = false;

  private _breakpointObserver: BreakpointObserver = inject(BreakpointObserver);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  menuItems: MenuItem[] = [
    {
      icon: 'speed',
      label: 'Dashboard',
      route: '/main/dashboard',
    },
    {
      icon: 'table_charts',
      label: 'Timesheets',
      route: '/main/timesheets',
    },
    {
      icon: 'workspaces',
      label: 'Projects',
      route: '/main/projects',
    },
    {
      icon: 'groups',
      label: 'Employees',
      route: '/main/employees',
    },
  ];

  isDarkTheme: boolean = false;

  ngAfterViewInit(): void {
    this._breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        this.isMobile = result.matches;

        if (this.isMobile) {
          this.sidebar.mode = 'over';
          this.sidebar.close();
        } else {
          this.sidebar.mode = 'side';
          this.sidebar.open();
        }

        this._cdr.detectChanges();
      });
  }

  toggleSidebar(): void {
    this.sidebar.toggle();
  }
}

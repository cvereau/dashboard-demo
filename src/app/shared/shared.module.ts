import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WidgetComponent } from './components/widget/widget.component';
import { AgCharts } from 'ag-charts-angular';
import { AgGridModule } from 'ag-grid-angular';

const components = [NotFoundComponent, SidebarComponent, WidgetComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    AgCharts,
    //AgGridModule,
  ],
  exports: [...components, AgCharts, AgGridModule],
})
export class SharedModule {}

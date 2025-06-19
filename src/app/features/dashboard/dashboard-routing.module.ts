import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {}

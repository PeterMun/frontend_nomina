import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CentrodecostosComponent } from './centrodecostos/centrodecostos.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PlanillaComponent } from './planilla/planilla.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CentrodecostosComponent,
    PagesComponent,
    PlanillaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }

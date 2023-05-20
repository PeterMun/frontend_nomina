import {  RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CentrodecostosComponent } from "./centrodecostos/centrodecostos.component";
import { PlanillaComponent } from "./planilla/planilla.component";


const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children:[
          { path: '', component: DashboardComponent },
          { path: 'centrocostos', component: CentrodecostosComponent },
          { path: 'movplanilla', component: PlanillaComponent },
          // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ] 
      },
    

];

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})

export class PagesRoutingModule{}


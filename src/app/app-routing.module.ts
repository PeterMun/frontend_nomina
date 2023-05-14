import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing';


import { PagesRoutingModule } from './pages/pages.routing';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: Error404Component },

]


@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot( routes ),
   PagesRoutingModule,
   AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

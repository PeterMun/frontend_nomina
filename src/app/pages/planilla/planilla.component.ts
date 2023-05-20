import { Component, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { PlanillaService } from 'src/app/services/planilla.service';

@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html',
  styles: [
  ]
})
export class PlanillaComponent {

  planillaMov:any = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private planillaService: PlanillaService
  ){
    this.getMovimientoPlanilla()

  }


  getMovimientoPlanilla(){
    console.log('get planilla  component');
    this.planillaService.getMovimientoPlanilla().subscribe( (resp: any) => {
      this.planillaMov = resp.movp

      console.log(this.planillaMov);
    
    } )

  }

  createMovimientoPlanilla(){
    console.log('create planiia component');
  }

  updateMovimientoPlanilla(){
    console.log('update planiia component');
  }

  deleteMovimientoPlanilla(){
    console.log('delete planiia component');
  }


}

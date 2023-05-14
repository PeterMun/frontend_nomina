import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { centroCostos } from 'src/app/models/centroCostos.model';
import { CentroCostosService } from 'src/app/services/centro-costos.service';
import Swal from 'sweetalert2';
import { centroCostosForm } from '../../interfaces/centroCostos-form.interface';

@Component({
  selector: 'app-centrodecostos',
  templateUrl: './centrodecostos.component.html',
  styles: [
  ]
})
export class CentrodecostosComponent {

  codEmisor: any;
  centroCostos:any = [];
  public ccostos: centroCostos[] = [];
  public centroCostosForm:any = FormGroup;
  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private centroCostosService: CentroCostosService
  ){
    this.getCentroCostos();
  }
  ngOnInit(): void {

    this.centroCostosForm = this.fb.group({

      codigo: ['', Validators.required ],
      descripcion: ['', Validators.required],
    });

  }




  getCentroCostos(){
    console.log('get costos component');
    this.centroCostosService.getCentroCostos().subscribe( ( resp:any ) => {
      this.centroCostos = resp.costos
      console.log(this.centroCostos);
      
       
    })
  }


  createCentroCostos(){
    console.log('create costos component');
    let codigo = (<HTMLInputElement>document.getElementById('codigo')).value
    let descripcion = (<HTMLInputElement>document.getElementById('descripcion')).value

    console.log(codigo);
    console.log(descripcion);
    this.centroCostosService.createCentroCostos(codigo, descripcion)
        .subscribe( resp => {
          Swal.fire('Centro de costos creado', descripcion, 'success')
          window.location.reload()
        } )
    
    

  }

  updateCentroCostos( costo: centroCostos ){
    this.centroCostosService.updateCentroCostos(
      costo.codigo,
      costo.nombreCentroCostos
    ).subscribe( resp => {
      Swal.fire('Actualizado', costo.nombreCentroCostos, 'success')
    } )

  }

  deleteCentroCostos( costo: centroCostos ){
    console.log('delete costos component');
    console.log(costo.codigo);
    console.log(costo.nombreCentroCostos);
    this.centroCostosService.deleteCentroCostos(
      costo.codigo,
      costo.nombreCentroCostos
    ).subscribe( resp => {
      
      Swal.fire('Eliminado', costo.nombreCentroCostos, 'success')
      window.location.reload()
      
    } )

  }

  async openModal(){
    const { value } = await Swal.fire({
      title: 'Crear Centro de costo',
      text: 'Ingrese nuevo Centro de costo',
      html:
      '<input id="swal-input1" class="swal2-input" placeholder="Codigo">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Nombre Centro de Costo">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        (<HTMLInputElement>document.getElementById('swal-input1')).value,
        (<HTMLInputElement>document.getElementById('swal-input2')).value
      ]
    }
    })
    console.log(value);
    // if( value.length > 0 ){
    //   this.centroCostosService.createCentroCostos( value )
    //       .subscribe( (resp:any) => {
    //         this.centroCostos.push(resp.centroCostos)
    //       } )
    // }
    
  }

}

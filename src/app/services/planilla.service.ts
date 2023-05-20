import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanillaService {

  constructor(
    private http: HttpClient
  ) { }

  
  getMovimientoPlanilla(){
    console.log('movimiento planilla services');
    return this.http.get(`https://localhost:7169/movimientoPlanillaAll`)
    
  }

  createMovimientoPlanilla( 
      concepto: string, 
      prioridad: string,
      tipooperacion: string,
      cuenta1: string,
      cuenta2: string,
      cuenta3: string,
      cuenta4: string,
      MovimientoExcepcion1: string,
      MovimientoExcepcion2: string,
      MovimientoExcepcion3: string,
      Traba_Aplica_iess: string,
      //Traba_Proyecto_imp_renta: string,
      Aplica_Proy_Renta: string,
      Empresa_Afecta_Iess: string

    ){
    console.log('movimiento planilla services');
    return this.http.get(
      `https://localhost:7169/movimientoPlanillaInsert?concepto=${ concepto }&prioridad=${ prioridad }&tipoOperacion=${ tipooperacion }&cuenta1=${ cuenta1 }&cuenta2=${ cuenta2 }&cuenta3=${ cuenta3 }&cuenta4=${ cuenta4 }&movimientoExcepcion1=${ MovimientoExcepcion1 }&movimientoExcepcion2=${ MovimientoExcepcion2 }&movimientoExcepcion3=${ MovimientoExcepcion3 }&aplica_iess=${ Traba_Aplica_iess }&aplica_imp_renta=${ Aplica_Proy_Renta }&empresa_Afecta_Iess=${ Empresa_Afecta_Iess }`)
    
  }

  updateMovimientoPlanilla( 
    concepto: string, 
    prioridad: string,
    tipooperacion: string,
    cuenta1: string,
    cuenta2: string,
    cuenta3: string,
    cuenta4: string,
    MovimientoExcepcion1: string,
    MovimientoExcepcion2: string,
    MovimientoExcepcion3: string,
    Traba_Aplica_iess: string,
    //Traba_Proyecto_imp_renta: string,
    Aplica_Proy_Renta: string,
    Empresa_Afecta_Iess: string 
    ){
    console.log('movimiento planilla services');
    return this.http.get(``)
    
  }

  deleteMovimientoPlanilla( 
        codigo: string, 
        descripcion: string 
      ){
    console.log('movimiento planilla services');
    return this.http.get(`https://localhost:7169/movimientoPlanillaDelete?codigomovimiento=${ codigo }&descripcionomovimiento=${ descripcion }`)
    
  }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentroCostosService {

  constructor(
    private http: HttpClient
  ) { }


  getCentroCostos(){
    console.log('centro de costos services');
    return this.http.get(`https://localhost:7169/centroCostosAll`)
    
  }

  createCentroCostos( codigo: string, descripcion: string ){
    console.log('create de costos services');
    return this.http.get(`https://localhost:7169/centroCostosInsert?codigo=${ codigo }&descripcion=${ descripcion }`)
    
  }

  updateCentroCostos( codigo: string, descripcion: string ){
    console.log('update de costos services');
    return this.http.get(`https://localhost:7169/centroCostosUpdate?codigo=${ codigo }&descripcion=${ descripcion }`)
    
  }

  deleteCentroCostos( codigo: string, descripcion: string ){
    console.log('delete de costos services');
    return this.http.get(`https://localhost:7169/centroCostosDelete?codigo=${ codigo }&descripcion=${ descripcion }`)
    
  }



}


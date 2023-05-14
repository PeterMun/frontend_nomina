import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginForm } from '../interfaces/login-form.interface';
import { Emisor } from '../models/emisor.model';
import { map, tap } from 'rxjs';


//const base_url = 'http://localhost:3000/api';
const base_url = 'https://localhost:7169/'

declare const gapi: any;



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }
  private apiUrl = 'https://localhost:7169/?usuario=5001&password=5001u';




  login( user: string, pass: string ){
    console.log('login service');
    //console.log(usuario, password);
  
    return this.http.get(`https://localhost:7169/?usuario=${ user }&password=${ pass }`)
          .pipe(
            tap( ( resp: any ) => {
              console.log(resp);
              localStorage.setItem('codEmisor', resp.codEmisor)
              
            } ),
            //map((resp: {ok: boolean, emisor: Emisor[] }) => resp.emisor)
          )
  }

  getEmisor( ){
    console.log('emisor service');
    //console.log(usuario, password);
  
    return this.http.get(`https://localhost:7169/emisor/all`)
          .pipe(
            tap( ( resp: any ) => {
              // console.log(resp);
              
            } ),
            
          )
  }



}

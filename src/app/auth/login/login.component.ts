import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

//import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {



  public formSubmitted = false;
  codEmisor: any;
  emisores:any = [];
 
  

  public loginForm = this.fb.group({
    usuario: [ '', Validators.required ],
    password: [ '', Validators.required ]
  })

  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private usuarioService: UsuariosService
  ){
    


  }

  ngOnInit(): void {
    
  }

  login() {
   
    let user:any = this.loginForm.value.usuario;
    let pass:any = this.loginForm.value.password;


    this.usuarioService.login( user, pass ).subscribe( ( resp ) => {
       
      console.log(resp.ok);
       
      if ( resp.ok === true ) {
        // console.log('puede pasar');
        this.usuarioService.getEmisor().subscribe( ( emi ) => {
          console.log(emi);
          this.emisores = emi.emisor  
          //console.log(this.emisores);
          const codEmiC = (<HTMLInputElement>document.getElementById('select_options')).value
          const codEmiL = localStorage.getItem('codEmisor')
          if( codEmiC === 'Seleccione un emisor' ){
            console.log('primera opcion');

          }else{
            console.log('con opciones');
            console.log(codEmiC);
            if( codEmiL != codEmiC ){
              Swal.fire( 'Error', 'Ud ha elegido otro emisor, por favor intente de nuevo', 'error' )

            }else{
              this.router.navigateByUrl('/');

            }
              
          }
                     
        } )
        
        
      } else {
        console.log('NO PUEDE pasar');
        Swal.fire( 'Error', resp.msg, 'error' )  
      }
        
      
    }, 
    (err) => {
      Swal.fire( 'Error', err.msg, 'error' ) 
    }
    
    );

  }




    // validacion(){

    //   const codEmiC = (<HTMLInputElement>document.getElementById('select_options')).value
    //   console.log(codEmiC);
    //   const codEmiL = localStorage.getItem('codEmisor')
    //   console.log(codEmiL);

    //   if( codEmiL != codEmiC ){
    //     Swal.fire( 'Error', 'Ud ha elegido otro emisor, por favor intente de nuevo', 'error' )


    //   }else{
    //     console.log('puede pasar');
        
    //   }

    // }



}

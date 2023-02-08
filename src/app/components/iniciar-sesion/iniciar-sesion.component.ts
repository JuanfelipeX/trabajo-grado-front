import { Component, OnInit } from '@angular/core';
import { RegistrarseService } from 'src/app/services/registrarse/registrarse.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  formulario: any = {};

  formularioUserByid: any = {};

  constructor(private registrarseService: RegistrarseService) {}

  ngOnInit(): void {}

  getUsuarioById() {
    this.registrarseService.obtenerUsuariosId(this.formulario.id).subscribe({
      next: (data) => {
        this.formularioUserByid = data;
      },
      error: (err) => {},
    });
  }

  iniciarSesion() {
    this.getUsuarioById();

    setTimeout(() => {
      if (
        this.formulario.email == this.formularioUserByid.email &&
        this.formulario.contrasena == this.formularioUserByid.contrasena
      ) {
        console.log('paso');
      } else {
        console.log('no pasa');
      }
    }, 500);
  }
}

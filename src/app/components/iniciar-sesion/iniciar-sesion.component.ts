import { Component, OnInit } from '@angular/core';
import { RegistrarseService } from 'src/app/services/registrarse/registrarse.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  formulario: any = {};

  formularioUserByCorreo: any = [];

  constructor(private registrarseService: RegistrarseService) {}

  ngOnInit(): void {}

  getUsuarioByCorreo() {
    this.registrarseService
      .obtenerUsuariosCorreo(this.formulario.email)
      .subscribe({
        next: (data) => {
          this.formularioUserByCorreo = data[0];
        },
        error: (err) => {},
      });
  }

  iniciarSesion() {
    this.getUsuarioByCorreo();

    setTimeout(() => {
      if (this.formularioUserByCorreo == undefined) {
        console.log('NO paso');
      } else if (
        this.formulario.email == this.formularioUserByCorreo.email &&
        this.formulario.contrasena == this.formularioUserByCorreo.contrasena
      ) {
        console.log('Paso');
      }
    }, 500);
  }
}

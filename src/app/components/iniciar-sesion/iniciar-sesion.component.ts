import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {

  formulario: any = {
    correo: null,
    contrasena: null,
  };

  constructor() {}

  ngOnInit(): void {}
}

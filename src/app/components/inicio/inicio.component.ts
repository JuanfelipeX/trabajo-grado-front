import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerramientasService } from 'src/app/services/herramientas/herramientas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  //lista de herramientas
  listaHerrmientas: any = {};

  // Verificar Logeo
  verificadorBool: boolean = false;

  constructor(
    private HerramientaService: HerramientasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.verifyLooged();
    this.getHerramientas();
  }

  verifyLooged() {
    if (localStorage.getItem('contrasena')) {
      this.verificadorBool = true;
    } else {
      this.verificadorBool = false;
    }
  }

  /*
   ************************************************
   *              TRAER HERRAMIENTAS              *
   ************************************************
   */
  getHerramientas() {
    this.HerramientaService.obtenerHerramientas().subscribe({
      next: (data) => {
        this.listaHerrmientas = data;
        console.log(data);
      },
      error: (err) => {},
    });
  }
}

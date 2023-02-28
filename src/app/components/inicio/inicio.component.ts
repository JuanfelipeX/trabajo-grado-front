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

  constructor(
    private HerramientaService: HerramientasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHerramientas();
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

import { Component, OnInit } from '@angular/core';
import { HerramientasService } from 'src/app/services/herramientas/herramientas.service';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.component.html',
  styleUrls: ['./herramienta.component.css'],
})
export class HerramientaComponent implements OnInit {
  formulario: any = {};

  constructor(private HerramientaService: HerramientasService) {}

  ngOnInit(): void {}

  /*
   ************************************************
   *                  REGISTRARSE                 *
   ************************************************
   */
  registrase() {
    this.HerramientaService.crearHerramienta(this.formulario).subscribe({
      next: (data) => {},
      error: (err) => {},
    });
  }
}

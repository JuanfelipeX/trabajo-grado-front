import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor(private router: Router) {
    this.verifyLooged();
  }

  ngOnInit(): void {}

  verifyLooged() {
    if (localStorage.getItem('contrasena')) {
    } else {
      this.router.navigateByUrl('iniciar-sesion');
    }
  }
}

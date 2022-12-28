import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private URL_BASE: string;
  private URL_WEB: string;
  constructor() {
    /* Configuración de url del servidor Api Rest */
    this.URL_BASE = 'http://software.presucloud.test/api/';
    this.URL_WEB = 'http://www.presucloud.test/';
    // this.URL_BASE = 'https://backend.ipsprogresandoensalud.com/api/auth/';
    // this.URL_WEB = 'https://backend.ipsprogresandoensalud.com/';
  }

  /*-----------------------------------------------------------------------------------
  | Función get url base. Retorna la url del servidor configurada en la variable
  -----------------------------------------------------------------------------------*/
  getUrlBase() {
    return this.URL_BASE;
  }
  getUrlWeb() {
    return this.URL_WEB;
  }
}

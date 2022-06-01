import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableEl } from '../tablas/cosecha';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  constructor(private httpClient: HttpClient) {}
  getCosechas() {
    return this.httpClient.get(`http://200.113.7.91/data_apiControlEnvCos/api/EncabezadoDTE/search?temporada=21/22&exportadora=100&zona=20&frigorifico=%20%2022&pagina=1&filas=20`).
        pipe(
           map((data: any) => {
             console.log(data);
             return data;
           }), catchError( error => {
             return throwError( 'Ha ocurrido un error!' );
           })
        )
}
}
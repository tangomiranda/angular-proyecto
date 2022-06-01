import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApicallService } from '../../apicall.service';
import { TableEl } from '../../cosecha';
import { from, Observable, throwError } from 'rxjs';
// Temporal (Tabla)
export interface TableElement {
  id: string;
  numDte: string;
  fecha: string;
  rut: string;
  huerto: string;
  productor: string;
  direccion: string;
}

// Temporal (Tabla)
const ELEMENT_DATA: TableElement[] = [
  { id: '001', numDte: '111', fecha: '01/01/2022', rut: '00.000.000-0', huerto: 'Huerto 1', productor: 'Productor 1', direccion: 'Dirección 1' },
  { id: '002', numDte: '222', fecha: '01/01/2022', rut: '00.000.000-0', huerto: 'Huerto 2', productor: 'Varios', direccion: 'Dirección 2' },
  { id: '003', numDte: '333', fecha: '01/01/2022', rut: '00.000.000-0', huerto: 'Huerto 3', productor: 'Productor 3', direccion: 'Dirección 3' },
  { id: '004', numDte: '444', fecha: '01/01/2022', rut: '00.000.000-0', huerto: 'Huerto 4', productor: 'Varios', direccion: 'Dirección 4' },
  { id: '005', numDte: '555', fecha: '01/01/2022', rut: '00.000.000-0', huerto: 'Huerto 5', productor: 'Productor 5', direccion: 'Dirección 5' },
];
const ELE: TableElement[]=[];

@Component({
  selector: 'app-envases-cosecha-tabla-listado',
  templateUrl: './envases-cosecha-tabla-listado.component.html',
  styleUrls: ['./envases-cosecha-tabla-listado.component.css']
})
export class EnvasesCosechaTablaListadoComponent implements OnInit {
  // Get attr
  // Get attr
  // Get attr
  // Get attr
  
  

  //empresaData: any = {};
 // empresaData:TableElement[] = [];
  @Input() moduloGetTab: string | undefined;

  //empresaData= ELEMENT_DATA;
  // Temporal (Tabla)
  displayedColumns: string[] = ['id', 'numDte', 'fecha', 'rut', 'huerto', 'productor', 'direccion', 'acciones'];
  dataSource = ELEMENT_DATA;
  paso:any[]=[];
  empresaData: any=[];
  
  constructor(private http:HttpClient,private apiService: ApicallService) { }

  ngOnInit(): void {
 
   this.getCosechaList();
 
  }
 

  getCosechaList() {
    
    this.apiService
    .getCosechas()
    .subscribe((data:any[]) => {
     
      console.log(data);
      this.empresaData = data;
     
      console.log(this.empresaData.items[0].numDTE);
      this.paso.push(this.empresaData);
      this.dataSource=[];
      for (let numero of this.paso[0]['items']){
       
        console.log(numero);
        this.dataSource.push(numero);
          }
        console.log(this.dataSource);
 
    });
  }

 


 
}

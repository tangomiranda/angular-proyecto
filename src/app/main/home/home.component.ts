import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Temporal (Items)
  moduloMenuItems: any = [
    { titulo: 'Envases de cosecha', icono: 'import_export', enlace: '/envases-cosecha', params: null },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

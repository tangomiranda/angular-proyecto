import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-envases-cosecha-header-detalle',
  templateUrl: './envases-cosecha-header-detalle.component.html',
  styleUrls: ['./envases-cosecha-header-detalle.component.css']
})
export class EnvasesCosechaHeaderDetalleComponent implements OnInit {
  // Get attr
  @Input() moduloGetTab: string | undefined;
  @Input() moduloGetAccion: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}

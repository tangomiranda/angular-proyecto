import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-envases-cosecha-detalle',
  templateUrl: './envases-cosecha-detalle.component.html',
  styleUrls: ['./envases-cosecha-detalle.component.css']
})
export class EnvasesCosechaDetalleComponent implements OnInit {
  moduloNav: any | undefined;
  moduloGetTab: string | undefined;
  moduloGetAccion: string | undefined;


  constructor(
    private route: ActivatedRoute
  ) { }

  moduloNavUpdate(navParams: any): void {
    // Modulo Nav Alt Title
    var navAlt: any = {};
    var navAltSm = navAlt[navParams.modo] ? navAlt[navParams.modo].small : '';
    var navAltLg = navAlt[navParams.modo] ? navAlt[navParams.modo].large : '';

    // Modulo Tab Alt Title
    var navTab: any = { 
      'recepcion' : 'Recepción',
      'despacho' : 'Despacho',
     };
    var navTabTxt = navTab[navParams.tab] ? navTab[navParams.tab] : (navParams.tab ? navParams.tab.replace(/-/g, '. ') : null);

    // Modulo Nav Title
    this.moduloNav = [
      { small: 'Mov. Envases de Cosecha'+navAltSm, large: 'Movimientos Envases de Cosecha'+navAltLg, url: '/envases-cosecha', params: null, tab: null },
      { small: 'Envases Cosecheros'+navAltSm, large: 'Envases Cosecheros'+navAltLg, url: '/envases-cosecha', params: navParams, tab: navTabTxt },
    ];

    // Modulo Nav Actions
    if (navParams.accion == 'nuevo') this.moduloNav[this.moduloNav.length-1].large += ' (Nuevo)';
    if (navParams.accion == 'editar') this.moduloNav[this.moduloNav.length-1].large += ' (Editar)';
  }

  ngOnInit(): void {
    // Get params
    this.route.queryParams.subscribe(params => {
      // Modulo Nav Update
      this.moduloNavUpdate(params);
      
      // Update Vars
      this.moduloGetTab = params.tab;
      this.moduloGetAccion = params.accion;
    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './main/home/home.component';
import { EnvasesCosechaListadoComponent } from './modulos/envases-cosecha/envases-cosecha-listado/envases-cosecha-listado.component';
import { EnvasesCosechaDetalleComponent } from './modulos/envases-cosecha/envases-cosecha-detalle/envases-cosecha-detalle.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'envases-cosecha', component: EnvasesCosechaListadoComponent },
  { path: 'envases-cosecha/detalle', component: EnvasesCosechaDetalleComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

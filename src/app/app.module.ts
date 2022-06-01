import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './main/home/home.component';
import { EnvasesCosechaListadoComponent } from './modulos/envases-cosecha/envases-cosecha-listado/envases-cosecha-listado.component';
import { EnvasesCosechaDetalleComponent } from './modulos/envases-cosecha/envases-cosecha-detalle/envases-cosecha-detalle.component';
import { EnvasesCosechaTablaListadoComponent } from './tablas/envases-cosecha/envases-cosecha-tabla-listado/envases-cosecha-tabla-listado.component';
import { EnvasesCosechaHeaderDetalleComponent } from './headers/envases-cosecha/envases-cosecha-header-detalle/envases-cosecha-header-detalle.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnvasesCosechaListadoComponent,
    EnvasesCosechaDetalleComponent,
    EnvasesCosechaTablaListadoComponent,
    EnvasesCosechaHeaderDetalleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

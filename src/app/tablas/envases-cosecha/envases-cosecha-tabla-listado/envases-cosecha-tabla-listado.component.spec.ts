import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvasesCosechaTablaListadoComponent } from './envases-cosecha-tabla-listado.component';

describe('EnvasesCosechaTablaListadoComponent', () => {
  let component: EnvasesCosechaTablaListadoComponent;
  let fixture: ComponentFixture<EnvasesCosechaTablaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvasesCosechaTablaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvasesCosechaTablaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

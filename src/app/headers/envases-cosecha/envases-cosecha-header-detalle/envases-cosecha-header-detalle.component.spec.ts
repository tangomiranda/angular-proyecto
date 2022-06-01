import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvasesCosechaHeaderDetalleComponent } from './envases-cosecha-header-detalle.component';

describe('EnvasesCosechaHeaderDetalleComponent', () => {
  let component: EnvasesCosechaHeaderDetalleComponent;
  let fixture: ComponentFixture<EnvasesCosechaHeaderDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvasesCosechaHeaderDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvasesCosechaHeaderDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

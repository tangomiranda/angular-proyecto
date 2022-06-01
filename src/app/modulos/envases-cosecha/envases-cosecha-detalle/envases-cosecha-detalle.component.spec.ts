import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvasesCosechaDetalleComponent } from './envases-cosecha-detalle.component';

describe('EnvasesCosechaDetalleComponent', () => {
  let component: EnvasesCosechaDetalleComponent;
  let fixture: ComponentFixture<EnvasesCosechaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvasesCosechaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvasesCosechaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

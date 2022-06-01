import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvasesCosechaListadoComponent } from './envases-cosecha-listado.component';

describe('EnvasesCosechaListadoComponent', () => {
  let component: EnvasesCosechaListadoComponent;
  let fixture: ComponentFixture<EnvasesCosechaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvasesCosechaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvasesCosechaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

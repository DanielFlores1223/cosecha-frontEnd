import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorCatalogoComponent } from './proveedor-catalogo.component';

describe('ProveedorCatalogoComponent', () => {
  let component: ProveedorCatalogoComponent;
  let fixture: ComponentFixture<ProveedorCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

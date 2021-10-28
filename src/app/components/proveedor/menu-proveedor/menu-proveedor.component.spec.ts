import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProveedorComponent } from './menu-proveedor.component';

describe('MenuProveedorComponent', () => {
  let component: MenuProveedorComponent;
  let fixture: ComponentFixture<MenuProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

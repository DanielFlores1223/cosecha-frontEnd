import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoUpdateComponent } from './catalogo-update.component';

describe('CatalogoUpdateComponent', () => {
  let component: CatalogoUpdateComponent;
  let fixture: ComponentFixture<CatalogoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

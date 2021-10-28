import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoReadComponent } from './catalogo-read.component';

describe('CatalogoReadComponent', () => {
  let component: CatalogoReadComponent;
  let fixture: ComponentFixture<CatalogoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

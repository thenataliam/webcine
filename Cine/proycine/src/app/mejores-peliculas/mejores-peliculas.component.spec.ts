import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoresPeliculasComponent } from './mejores-peliculas.component';

describe('MejoresPeliculasComponent', () => {
  let component: MejoresPeliculasComponent;
  let fixture: ComponentFixture<MejoresPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejoresPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MejoresPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

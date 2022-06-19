import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 tipo="";
  tamano=18;

  aumentar() {
    this.tamano+=5;
  }

  disminuir() {
  this.tamano-=5;
  }


  cambiarletra() {
    if(this.tipo=="Verdana") {
      this.tipo="sans-serif";
    } else {
      this.tipo="Verdana";
    }
  }

}

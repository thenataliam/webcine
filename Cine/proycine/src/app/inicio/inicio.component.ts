import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 /*  tipo="";
  tamano=0;
  color=""; */

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

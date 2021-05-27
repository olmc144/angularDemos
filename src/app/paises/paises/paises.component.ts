import { Component, OnInit } from '@angular/core';
import { Paises } from '../../paises';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises: Array<Paises> = [
    {
      nombre: "Colombia",
      capital: "Bogotá D.C.",
      poblacion: "50.34 millones",
      moneda: "Peso colombiano"
    },
    {
      nombre: "Venezuela",
      capital: "Caracas",
      poblacion: "28.52 millones",
      moneda: "Bolívar"
    },
    {
      nombre: "Argentina",
      capital: "Buenos Aires",
      poblacion: "44.94 millones",
      moneda: "Peso argentino"
    },
    {
      nombre: "Ecuador",
      capital: "Quito",
      poblacion: "17.37 millones",
      moneda: "Dolar estadounidense"
    },
    {
      nombre: "Perú",
      capital: "Lima",
      poblacion: "32.51 millones",
      moneda: "Sol"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CardItem {
  titulo: String;
  imagen: String;
  descripcion: String;
  enlace: String;
}

@Component({
  selector: 'app-cardindex',
  templateUrl: './cardindex.component.html',
  styleUrls: ['./cardindex.component.css']
})
export class CardindexComponent {
  itemsCard: CardItem[] = [{
    titulo: 'Primaria',
    imagen: '../../assets/images/primaria.jpg',
    descripcion: 'Jardin a Quinto',
    enlace: "primaria",
  },
  {
    titulo:'Secundaria',
    imagen:'../../assets/images/secundaria.avif',
    descripcion:'Sexto a Once',
    enlace:'secundaria',
},
{
    titulo:'Cursos',
    imagen:'../../assets/images/clasesvacacionales.jpg',
    descripcion:'Cursos - Refuerzo',
    enlace:'cursos',
}
]

}

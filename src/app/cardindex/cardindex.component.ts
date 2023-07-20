import { Component } from '@angular/core';

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
    enlace: 'primaria.html',
  },
  {
    titulo:'Secundaria',
    imagen:'../../assets/images/secundaria.avif',
    descripcion:'Sexto a Once',
    enlace:'secundaria.html',
},
{
    titulo:'Cursos',
    imagen:'../../assets/images/clasesvacacionales.jpg',
    descripcion:'Cursos - Refuerzo',
    enlace:'cursos.html',
}
]

}

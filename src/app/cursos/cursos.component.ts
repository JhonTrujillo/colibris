import { Component } from '@angular/core';

interface CardItem {
  titulo: String;
  imagen: String;
  descripcion: String;
  enlace: String;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  itemsCard: CardItem[] = [{
    titulo:'Hapkido',
    imagen:'../../assets/images/hapkido.jpg',
    descripcion:'Arte marcial coreano',
    enlace:'hapkido.html',
},
{
    titulo:'Artistica',
    imagen:'../../assets/images/artistica.jpg',
    descripcion:'Creaciones Unicas',
    enlace:'artistica.html',
},
{
    titulo:'Tecnologia',
    imagen:'../../assets/images/tecnologia.jpeg',
    descripcion:'Conocimientos y habilidades',
    enlace:'tecnologia.html',
},
{
    titulo:'Educacion Fisica',
    imagen:'../../assets/images/educacionfisica.jpg',
    descripcion:'Disciplina pedagogica',
    enlace:'edufisica.html',
},
{
    titulo:'Ingles',
    imagen:'../../assets/images/ingles.avif',
    descripcion:'Lenguaje de comunicacion',
    enlace:'ingles.html',
},
{
    titulo:'Musica',
    imagen:'../../assets/images/musica.jpg',
    descripcion:'Expresion Artistica',
    enlace:'musica.html',
}
  ]
}




import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Busqueda, BusquedaService } from '../servicios/busqueda.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit{
 
  buscar: any;
  constructor(private servicioBusqueda: BusquedaService) {
    
  }

  ngOnInit(): void {

  }

  search(query:any){
    this.servicioBusqueda.newQueryBusqueda =  {query}
  }

  
}









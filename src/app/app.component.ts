import { Component } from '@angular/core';
import { Busqueda, BusquedaService } from './servicios/busqueda.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colibris';
  info$: Observable<Busqueda>;
  listado: any = [];

  constructor(private busquedaServicio: BusquedaService){
    this.info$ = this.busquedaServicio.queryBusqueda;
    this.busquedaServicio.devolverListaFiltrada().subscribe((r:any)=>{
      this.listado = r;
    })
  }

  ngOnInit() { }
}


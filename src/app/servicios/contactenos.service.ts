import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class contactenosService {

  constructor(private http: HttpClient) { }

  public enviarDatos(data: any): Observable<any>
  {
    return this.http.post('http://localhost:8000/routes/api_contacto.php',data);
  }
}

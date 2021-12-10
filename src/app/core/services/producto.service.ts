import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = environment.url_local_api

  constructor(private http:HttpClient) { }

  indexProducto(){
    return this.http.get(`${this.url}/producto`);
  }
}

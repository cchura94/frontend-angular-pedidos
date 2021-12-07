import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "./../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  url_base = environment.url_local_api
  

  constructor(protected http:HttpClient) { }

  getCategorias(){
    return this.http.get(`${this.url_base}/categoria`);
  }
}
